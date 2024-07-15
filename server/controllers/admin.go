package controllers

import (
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/kmdavidds/ormaba-api/server/initializers"
	"github.com/kmdavidds/ormaba-api/server/models"
)

func LoginAdmin(c *fiber.Ctx) error {
	var body struct {
		ID       string `json:"id"`
		Password string `json:"password"`
	}

	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	if (body.ID != os.Getenv("ADMIN_ID") || body.Password != os.Getenv("ADMIN_PASSWORD")) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "wrong credentials",
		})
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": body.ID,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))

	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	c.Cookie(&fiber.Cookie{
		Name:     "Admin",
		Value:    tokenString,
		Expires:  time.Now().Add(24 * time.Hour),
		HTTPOnly: true,
		SameSite: "lax",
	})

	return c.JSON(fiber.Map{
		"message": "successfully logged in as admin",
	})
}

func GetAllStudents(c *fiber.Ctx) error {
	var user []models.User
	if err := initializers.DB.Find(&user).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.JSON(user)
}

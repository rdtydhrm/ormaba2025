package controllers

import (
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/kmdavidds/ormaba-api/server/initializers"
	"github.com/kmdavidds/ormaba-api/server/models"

	u "github.com/ahmdyaasiin/ub-auth-without-notification/v2"
)

func Login(c *fiber.Ctx) error {
	var body struct {
		NIM      string `json:"nim"`
		Password string `json:"password"`
	}

	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	resp, err := u.AuthUB(body.NIM, body.Password)
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	user := models.User{
		NIM:          resp.NIM,
		FullName:     resp.FullName,
		Email:        resp.Email,
		Faculty:      resp.Fakultas,
		StudyProgram: resp.ProgramStudi,
	}

	err = initializers.DB.First(&user, user.NIM).Error
	if err != nil {
		initializers.DB.Create(&user)
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.NIM,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))

	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	c.Cookie(&fiber.Cookie{
		Name:     "Authorization",
		Value:    tokenString,
		Expires:  time.Now().Add(24 * time.Hour),
		HTTPOnly: true,
		SameSite: "lax",
	})

	return c.JSON(fiber.Map{
		"message": "successfully logged in",
	})
}

func Logout(c *fiber.Ctx) error {
	c.Cookie(&fiber.Cookie{
		Name: "Authorization",
		// Set expiry date to the past
		Expires:  time.Now().Add(-(time.Hour * 2)),
		HTTPOnly: true,
		SameSite: "lax",
	})

	return c.JSON(fiber.Map{
		"message": "successfully logged out",
	})
}

func IsAuthenticated(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "authenticated",
	})
}

func GetUserInfo(c *fiber.Ctx) error {
	userNIM := c.Locals("userNIM")
	var user models.User
	if err := initializers.DB.First(&user, userNIM).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err,
		})
	}
	return c.JSON(user)
}
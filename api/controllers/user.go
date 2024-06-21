package controllers

import (
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/kmdavidds/ormaba-api/api/initializers"
	"github.com/kmdavidds/ormaba-api/api/models"

	u "github.com/ahmdyaasiin/ub-auth-without-notification/v2"
)
	

func Login(c *fiber.Ctx) error {
	type Body struct {
		NIM      string `json:"NIM"`
		Password string `json:"Password"`
	}

	body := new(Body)

	if err := c.BodyParser(body); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, "failed to parse body")
	}

	resp, err := u.AuthUB(body.NIM, body.Password)
    if err != nil {
       return fiber.NewError(fiber.StatusNotFound, "user not found")
    }

	user := models.User{
		NIM: resp.NIM,
		FullName: resp.FullName,
		Email: resp.Email,
		Faculty: resp.Fakultas,
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
		return fiber.NewError(fiber.StatusInternalServerError, "failed to create JWT")
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
        Name:     "Authorization",
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
	userNIM := c.Get("user")
	var user models.User
	initializers.DB.First(&user, userNIM)
	return c.JSON(user)
}

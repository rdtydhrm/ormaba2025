package middleware

import (
	"fmt"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

func RequireAdmin(c *fiber.Ctx) error {
	tokenString := c.Cookies("Admin", "Empty")
	if tokenString == "Empty" {
		return fiber.NewError(fiber.StatusUnauthorized, "not admin")
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(os.Getenv("SECRET")), nil
	})
	if err != nil {
		return fiber.NewError(fiber.StatusUnauthorized, "failed to parse JWT")
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			return fiber.NewError(fiber.StatusUnauthorized, "JWT is expired")
		}

		adminID, ok := claims["sub"].(string)

		if !ok {
            return c.Status(fiber.StatusUnauthorized).SendString("User ID not found in token")
        }

		c.Locals("adminID", adminID)

		return c.Next()
	}
	return nil
}

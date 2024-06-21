package middleware

import (
	"fmt"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

func RequireAuth(c *fiber.Ctx) error {
	tokenString := c.Cookies("Authorization", "Empty Auth")
	if tokenString == "Empty Auth" {
		return fiber.NewError(fiber.StatusUnauthorized, "empty auth")
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

		userNIM := claims["sub"].(string)

		c.Set("user", userNIM)
		c.Next()
	} 
	return nil
}
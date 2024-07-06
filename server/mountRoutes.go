package server

import (
	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/ormaba-api/server/controllers"
	"github.com/kmdavidds/ormaba-api/server/middleware"
)

func MountRoutes(api fiber.Router) {
	api.Post("/login", controllers.Login)
	api.Get("/logout", controllers.Logout)
	api.Get("/auth", middleware.RequireAuth, controllers.IsAuthenticated)
	api.Get("/info", middleware.RequireAuth, controllers.GetUserInfo)
}
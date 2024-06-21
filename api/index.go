package handler

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
	"github.com/kmdavidds/ormaba-api/fiber/controllers"
	"github.com/kmdavidds/ormaba-api/fiber/initializers"
	"github.com/kmdavidds/ormaba-api/fiber/middleware"
)

// Handler is the main entry point of the application. Think of it like the main() method
func Handler(w http.ResponseWriter, r *http.Request) {
	initializers.ConnectToDB()
	// initializers.SyncDB()

	// This is needed to set the proper request path in `*fiber.Ctx`
	r.RequestURI = r.URL.String()

	handler().ServeHTTP(w, r)
}

// building the fiber application
func handler() http.HandlerFunc {
	app := fiber.New()

	app.Get("/", func (c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"instagram": "kmdavidds",
		})
	})

	api := app.Group("/api")

	api.Post("/login", controllers.Login)
	api.Get("/logout", controllers.Logout)
	api.Get("/auth", middleware.RequireAuth, controllers.IsAuthenticated)
	api.Get("/info", middleware.RequireAuth, controllers.GetUserInfo)

	return adaptor.FiberApp(app)
}
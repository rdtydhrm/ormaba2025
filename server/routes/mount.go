package routes

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
	api.Patch("/profile", middleware.RequireAuth, controllers.UpdateUserInfo)
	api.Get("/friends/:query", middleware.RequireAuth, controllers.GetUsersNamesByGroup)
	
	api.Get("/announcements", controllers.GetAnnouncements)
	
	api.Get("/submissions", middleware.RequireAuth, controllers.GetAllUserSubmissions)
	api.Patch("/submissions/:id", middleware.RequireAuth, controllers.UpdateUserSubmission)
	
	api.Post("/admin", controllers.LoginAdmin)
	api.Get("/admin/students/all", middleware.RequireAdmin, controllers.GetAllStudents)
	api.Get("/admin/students/:query", middleware.RequireAdmin, controllers.GetFilteredStudents)
	
	api.Post("/admin/tasks", middleware.RequireAdmin, controllers.CreateTask)
	api.Get("/admin/tasks", middleware.RequireAdmin, controllers.GetAllTasks)
	api.Get("/admin/submissions", middleware.RequireAdmin, controllers.GetAllSubmissions)
	// api.Get("/admin/submissions/:query", middleware.RequireAdmin, controllers.GetFilteredSubmissions)

	api.Post("/mentor", controllers.LoginMentor)
}
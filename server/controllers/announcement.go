package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/kmdavidds/ormaba-api/server/initializers"
	"github.com/kmdavidds/ormaba-api/server/models"
)

func GetAnnouncements(c *fiber.Ctx) error {
	announcements := []models.Announcement{}
	if err := initializers.DB.Find(&announcements).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.JSON(announcements)
}
package controllers

import (
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/kmdavidds/ormaba-api/server/initializers"
	"github.com/kmdavidds/ormaba-api/server/models"
)

func CreateTask(c *fiber.Ctx) error {
	var body struct {
		Title       string    `json:"title"`
		Description string    `json:"description"`
		Category    string    `json:"category"`
		Deadline    time.Time `json:"deadline"`
	}

	err := c.BodyParser(&body)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	task := models.Task{
		ID: uuid.New(),
		Title: body.Title,
		Description: body.Description,
		Category: body.Category,
		Deadline: body.Deadline,
	}

	tx := initializers.DB.Begin()

	tx.Create(&task)
	if tx.Error != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "failed to create task",
			"err": tx.Error.Error(),
		})
	}

	var users []models.User
	tx.Find(&users)
	if tx.Error != nil {
		tx.Rollback()
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "failed get all users",
			"err": tx.Error.Error(),
		})
	}

	for _, user := range users {
		submission := models.Submission{
			ID: uuid.New(),
			UserNIM: user.NIM,
			TaskID: task.ID,
			Status: "Pending",
			Deadline: task.Deadline,
		}
		tx.Create(&submission)
		if tx.Error != nil {
			tx.Rollback()
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "failed to create submission",
				"err": tx.Error.Error(),
			})
		}
	}

	tx.Commit()

	return c.JSON(fiber.Map{
		"message": "successfully created task and created empty submissions for every user",
	})
}

func GetAllTasks(c *fiber.Ctx) error {
	var tasks []models.Task
	if err := initializers.DB.Find(&tasks).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.JSON(tasks)
}
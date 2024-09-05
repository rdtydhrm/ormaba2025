package controllers

import (
	"net/url"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/kmdavidds/ormaba-api/server/initializers"
	"github.com/kmdavidds/ormaba-api/server/models"
)

func GetAllUserSubmissions(c *fiber.Ctx) error {
	userNIM := c.Locals("userNIM")
	var submissions []models.Submission
	if err := initializers.DB.Where("user_nim = ?", userNIM).Preload("Task").Order("created_at desc").Find(&submissions).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.JSON(submissions)
}

func UpdateUserSubmission(c *fiber.Ctx) error {
	submissionId, err := uuid.Parse(c.Params("id"))
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	var body struct {
		Url     string    `json:"url"`
	}

	err = c.BodyParser(&body)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	var submission models.Submission

	tx := initializers.DB.Begin()

	tx.First(&submission, submissionId)
	if tx.Error != nil {
		tx.Rollback()
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"err": tx.Error,
		})
	}

	if time.Now().Before(submission.Deadline) {
		submission.Status = "Done"
	} else {
		submission.Status = "Late"
	}

	tx.Model(&submission).Updates(models.Submission{Url: body.Url, Status: submission.Status})
	if tx.Error != nil {
		tx.Rollback()
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": tx.Error.Error(),
		})
	}

	tx.Commit()
	return c.JSON(fiber.Map{
		"message": "successfully updated user's submission",
	})
}

func GetAllSubmissions(c *fiber.Ctx) error {
	var submissions []models.Submission
	if err := initializers.DB.Preload("Task").Preload("User").Find(&submissions).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.JSON(submissions)
}

func GetFilteredSubmissions(c *fiber.Ctx) error {
	query, err := url.QueryUnescape(c.Params("query"))
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	var submissions []models.Submission
	if err := initializers.DB.Preload("User").Where("\"group\" = ?", query).Find(&submissions).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.JSON(submissions)
}
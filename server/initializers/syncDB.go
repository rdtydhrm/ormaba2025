package initializers

import "github.com/kmdavidds/ormaba-api/server/models"

func SyncDB() {
	DB.AutoMigrate(&models.Announcement{})
	DB.AutoMigrate(&models.Task{})
	DB.AutoMigrate(&models.User{})
	DB.AutoMigrate(&models.Submission{})
}
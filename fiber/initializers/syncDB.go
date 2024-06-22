package initializers

import "github.com/kmdavidds/ormaba-api/fiber/models"

func SyncDB() {
	DB.AutoMigrate(&models.User{})
}
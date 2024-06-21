package initializers

import "github.com/kmdavidds/ormaba-api/api/models"

func SyncDB() {
	DB.AutoMigrate(&models.User{})
}
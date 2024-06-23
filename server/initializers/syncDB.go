package initializers

import "github.com/kmdavidds/ormaba-api/server/models"

func SyncDB() {
	DB.AutoMigrate(&models.User{})
}
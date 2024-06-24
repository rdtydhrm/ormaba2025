package initializers

import "github.com/kmdavidds/ormaba-api/server/models"

func SyncDB() {
	DB.AutoMigrate(&models.User{})
	DB.AutoMigrate(&models.AttendanceToken{})
	DB.AutoMigrate(&models.UserAttendance{})
}
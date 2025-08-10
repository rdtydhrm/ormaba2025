package initializers

import (
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDB() {
	var err error
	url := os.Getenv("POSTGRESQL_URL")
	DB, err = gorm.Open(postgres.Open(url), &gorm.Config{
		PrepareStmt: true,
	})

	if err != nil {
		panic("failed to connect to db")
	}
}

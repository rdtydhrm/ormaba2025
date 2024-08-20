package initializers

import (
	"encoding/csv"
	"fmt"
	"log"
	"os"

	"github.com/kmdavidds/ormaba-api/server/models"
)

func SeedNewStudents() {
	if os.Args[1] != "seed" {
		return
	}

	file, err := os.Open("server/initializers/data/mabahindu2024.csv")

	if err != nil {
		fmt.Println("failed to open file")
		fmt.Println(err)
		return
	}

	defer file.Close()

	reader := csv.NewReader(file)

	records, err := reader.ReadAll()

	if err != nil {
		fmt.Println("failed to read csv records")
		fmt.Println(err)
		return
	}

	tx := DB.Begin()

	for _, record := range records {
		user := models.User{
			NIM:          record[1],
			FullName:     record[2],
			Email:        record[6],
			Faculty:      record[3],
			StudyProgram: record[4],
			Group:        record[9],
		}

		tx := tx.Create(&user)
		if tx.Error != nil {
			fmt.Println("failed to create user")
			tx.Rollback()
			log.Fatal(tx.Error)
		}

		fmt.Println("User created: ", user.FullName)
	}

	tx.Commit()
}

package models

import "time"

type User struct {
	NIM          string `gorm:"primaryKey"`
	FullName     string
	Email        string
	Faculty      string
	StudyProgram string
	LineID       string
	Instagram    string
	PhoneNumber  string
	FoodAlergies string
	Sickness     string
	Group        string
	Mentor       string
	Origin       string
	Hobby        string
	PDOB         string
	Motto        string
	CreatedAt    time.Time
}

package models

import "time"

type User struct {
	NIM          string `gorm:"primaryKey"`
	FullName     string
	Email        string
	Faculty      string
	StudyProgram string
	CreatedAt    time.Time
}
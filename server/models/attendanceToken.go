package models

import (
	"time"
)

type AttendanceToken struct {
	Code      string `gorm:"primaryKey"`
	Status    string
	CreatedAt time.Time
	UpdatedAt time.Time
}

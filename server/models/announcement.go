package models

import "time"

type Announcement struct {
	ID        uint `gorm:"primaryKey"`
	Title     string
	Contents  string
	CreatedAt time.Time
	UpdatedAt time.Time
}

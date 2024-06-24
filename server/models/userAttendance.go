package models

import (
	"time"

	"github.com/google/uuid"
)

type UserAttendance struct {
	ID                  uuid.UUID `gorm:"primaryKey"`
	UserNIM             string    `gorm:"foreignkey:NIM;references:users;"`
	AttendanceTokenCode uuid.UUID `gorm:"foreignkey:Code;references:attendance_tokens;"`
	CreatedAt           time.Time
}

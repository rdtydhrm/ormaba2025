package models

import (
	"time"

	"github.com/google/uuid"
)

type Submission struct {
	ID        uuid.UUID `json:"id" gorm:"primaryKey"`
	UserNIM   string    `json:"userNIM"`
	TaskID    uuid.UUID `json:"taskID"`
	Url       string    `json:"url"`
	Status    string    `json:"status"`
	Deadline  time.Time `json:"deadline"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
	Task      Task      `json:"task" gorm:"foreignKey:ID;references:TaskID"`
	User      User      `json:"user" gorm:"foreignKey:NIM;references:UserNIM"`
}

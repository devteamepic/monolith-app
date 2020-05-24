class University < ApplicationRecord
  has_many :professors, class_name: "ProfessorUser", foreign_key: "user_id"
end

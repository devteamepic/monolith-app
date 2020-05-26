require 'json'
submissions = DocumentsSubmission
                  .joins("INNER JOIN users on users.id = documents_submissions.user_id and users.type = 'ProfessorUser'")
                  .joins("INNER JOIN submission_statuses on documents_submissions.status_id = submission_statuses.id and submission_statuses.name = 'Verified'").where('documents_submissions.encoded_abstract::text <> \'{}\'::text')

p submissions.size
File.open("public/submissions.json","w") do |f|
  f.write(submissions.map{|s| {id: s.id, encoded_abstract: s.encoded_abstract}}.to_json)
end

require 'csv'
AUTHORS_POS = 1
ABSTRACT_POS = 12

data = CSV.read(Rails.root.join("db", "scripts", 'arxiv.csv'))

status = SubmissionStatus.find_or_create_by(name: "Verified")
data[1..-1].each do |row|
  author, _ = row[AUTHORS_POS].split(',')
  author = author.strip
  fake_creds = author.split(' ').map(&:strip).join('-')

  prof = ProfessorUser.find_or_initialize_by(email: "#{fake_creds}@mail.com")
  prof.first_name = author
  prof.assign_attributes(password: SecureRandom.uuid) unless prof.encrypted_password.present?
  if prof.save
    submission = DocumentsSubmission.find_or_create_by(user: prof, abstract: row[ABSTRACT_POS], status: status)

    if submission.errors.any?
      p submission.errors.full_messages.last
      break
    end
  else
    p prof.errors.full_messages.last
    break
  end

  p author
end
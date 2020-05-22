ActiveAdmin.register DocumentsSubmission do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :abstract, :user_id, :status_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:abstract, :user_id, :status_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  permit_params :abstract, :user_id, :status_id

  index do
    selectable_column
    id_column
    column :abstract
    column :user do |sub|
      sub.user.full_name
    end
    column :status
  end

  show do |sub|
    attributes_table do
      row :id
      row :abstract
      row :user
      row :status
    end
  end

  form do |f|
    f.inputs do
      f.input :abstract
      f.input :user, as: :select, collection: ProfessorUser.all.map{ |u| [u.full_name, u.id]}
      f.input :status, as: :select, collection: SubmissionStatus.all.map {|s| [s.name, s.id]}
    end
    f.actions
  end
end

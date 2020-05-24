ActiveAdmin.register University do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :founded_at, :email, :logo
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :founded_at, :email, :logo]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  index do
    selectable_column
    id_column
    column :name
    column :email
    column :founded_at
    column :logo do |u|
      u.logo.present?\
        ? image_tag(u.logo.url(:thumb)) : content_tag(:span, "No logo")
    end
    actions
  end

  show do |u|
    attributes_table do
      row :name
      row :email
      row :founded_at
      row :logo do
        u.logo.present?\
        ? image_tag(u.logo.url(:thumb)) : content_tag(:span, "No logo")
      end
    end
  end

  form do |f|
    f.inputs do
      f.input :name
      f.input :email
      f.input :founded_at, as: :date_picker
      f.input :logo, :required => false, :as => :file, :hint => f.object.logo.present? \
          ? image_tag(f.object.logo.url(:thumb)) : content_tag(:span, "")
      f.input :logo_cache, :as => :hidden
    end
    f.actions
  end
end

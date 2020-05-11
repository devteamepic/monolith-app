class AddTypeToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :type, :string

    User.all.each do |u|
      u.update(type: "User")
    end
  end
end

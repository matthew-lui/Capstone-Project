class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :business_name
      t.string :address
      t.string :phone_number
      t.string :website
      t.string :image_url
      t.integer :likes
      t.string :google_coordinates
      t.integer :user_id
      t.string :price
      t.string :cuisine

      t.timestamps
    end
  end
end

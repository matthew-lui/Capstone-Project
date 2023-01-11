class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :business_name, :address, :phone_number, :website, :image_url, :likes, :google_coordinates
  has_many :posts
end

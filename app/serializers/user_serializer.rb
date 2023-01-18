class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic, :email
  has_many :posts
  has_many :restaurants
  has_many :favorites

  # def related_data
  #   object.related_models.map do |restaurant|
  #     {
  #       id: restaurant.id,
  #       restaurant_id: restaurant.restaurant_id
  #     }
  #   end
  # end
end

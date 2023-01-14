class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :restaurant_id, :comments, :likes
  has_one :user
  has_one :restaurant
end

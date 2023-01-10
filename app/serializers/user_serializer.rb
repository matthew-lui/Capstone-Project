class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic, :email
  has_many :posts
  has_many :restaurants
end

class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :restaurant_id, :comments, :likes, :findpostuser
  has_one :user
  has_one :restaurant

  def findpostuser
    self.object.findpostuser
  end
end


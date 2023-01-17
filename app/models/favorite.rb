class Favorite < ApplicationRecord
    belongs_to :user
    belongs_to :restaurant

    validates_uniqueness_of :restaurant_id, message: "You have already favorited this restaurant", scope: :user_id

end

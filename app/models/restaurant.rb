class Restaurant < ApplicationRecord
    has_many :favorites
    # has_many :users, through: :posts
    has_many :users, through: :favorites
    has_many :posts

    validates :business_name, presence: true
    
 # user --< favorites >-- restaurant >-- posts
end

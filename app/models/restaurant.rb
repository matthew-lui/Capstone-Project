class Restaurant < ApplicationRecord
    has_many :favorites
    has_many :posts
    has_many :users, through: :posts
    has_many :users, through: :favorites

    validates :business_name, presence: true

end

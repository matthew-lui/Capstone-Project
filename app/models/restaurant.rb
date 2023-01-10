class Restaurant < ApplicationRecord
    has_many :posts
    has_many :users, through: :posts

    validates :business_name, presence: true

end

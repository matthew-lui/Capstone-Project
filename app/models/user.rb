class User < ApplicationRecord
    has_many :posts
    has_many :restaurants, through: :posts

    validates :username, presence: true, uniqueness: true
    has_secure_password
end

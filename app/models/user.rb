class User < ApplicationRecord
    has_many :posts
    has_many :favorites
    has_many :restaurants, through: :posts
    has_many :restaurants, through: :favorites

    validates :username, presence: true, uniqueness: true
    has_secure_password
end

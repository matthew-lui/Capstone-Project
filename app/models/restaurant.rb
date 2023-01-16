class Restaurant < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites

    validates :business_name, presence: true
    def user_data
        User.find_by(id: object.user_id)
    end
    

end

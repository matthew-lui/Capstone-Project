class Post < ApplicationRecord
   belongs_to :restaurant
   belongs_to :user


   def findpostuser
      self.user.username
   end
   

end

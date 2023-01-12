class FavoritesController < ApplicationController

    def create
        favorite = Favorite.new(favorite_params)
        # byebug
        favorite.user = @current_user
        favorite.save 
        render json: favorite.restaurant, status: :created
        
           
    end
    private
    def favorite_params
        params.permit(:restaurant_id)
    end
end

class FavoritesController < ApplicationController

    def create
        favorite = Favorite.new(favorite_params)
        # byebug
        favorite.user = @current_user
        favorite.save 
        render json: favorite.restaurant, status: :created     
    end

    def destroy
        favorite = Favorite.find_by_id(params[:id])
        if favorite
            favorite.destroy
            head :no_content
        else 
            render json: {error: 'Favorite not found'}, status: :not_found
        end
    end 


    private
    def favorite_params
        params.permit(:restaurant_id)
    end
end

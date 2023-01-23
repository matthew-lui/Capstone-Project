class RestaurantsController < ApplicationController
    
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Restaurant.all
    end

    def show
        restaurant = Restaurant.find_by_id(params[:id])
        if restaurant
            render json: restaurant
        else
            render json: { error: "Restaurant not found" }, status: :not_found
        end
    end


    # def destroy_comment
    #     doomedComment = comment.find_by_id(params[:id])
    #     if doomedComment.user.id == @current_user.id
    #         doomedComment.destroy
    #     else
    #         render json:  {error: "You can't delete this comment"}, status: :unauthorized
    #     end
    # end

    def create
        restaurant = Restaurant.create(restaurant_params)
            if restaurant.valid?
                render json: restaurant
            else 
                this_will_become_the_variable_err = {error: user.errors.full_messages}
                render json: this_will_become_the_variable_err, status: :unprocessable_entity
            end
    end

    def update 
        restaurant = Restaurant.find_by_id(params[:id])
        if restaurant
            restaurant.update(likes)
            render json: restaurant
        else
            render json: {error: 'Restaurant not found'}, status: :not_found
        end
    end

    def destroy
        restaurant = Restaurant.find_by_id(params[:id])
        if restaurant
            restaurant.destroy
            head :no_content
        else 
            render json: {error: 'Restaurant not found'}, status: :not_found
        end
    end 



    private
    def restaurant_params
        params.permit(:business_name, :address, :phone_number, :website, :image_url, :google_coordinates, :user_id, :price, :cuisine)
    end
    def likes
        params.permit(:likes)
    end
end

## write a method that will sort rank from lowest to highest
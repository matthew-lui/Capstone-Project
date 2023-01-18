class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show, :index]
    
    def create
      user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user
        else
          this_will_become_the_variable_err = {error: user.errors.full_messages}
          render json: this_will_become_the_variable_err, status: :unprocessable_entity
        end
    end
    
    def show
      user = User.find_by(id: session[:user_id])
      if user
        render json: user, status: :ok
      else 
        render json: {error: "User Not Found"}, status: :not_found
      end
    
    end
    
    
    private
      def user_params
        params.permit(:username, :password, :profile_pic, :email)
    
      end
    
    end
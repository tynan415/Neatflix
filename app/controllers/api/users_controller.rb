class Api::UsersController < ApplicationController
    
    def new
        @user = User.new
    end

    def show
    end

    def create 
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :name, :password)
    end

end
class SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]
   
    def destroy
        if @current_user
            logout!
            render json: {}
        else
            render json: ['there is no current user'], status: 404
        end
    end

    def create
        email = params[:user][:email]
        password = params[:user][:password]
        @user = User.find_by_credentials(email, password)

        if @user
            login!(@user)
            render 'api/user/:id'
        else
            render json: ['invalid credentials'], status: 404
        end
    end
end

class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]
   
    def destroy
            logout!
            render json: { message: 'Logout succesful.' }
    end

    def create
        email = params[:user][:email]
        password = params[:user][:password]
        @user = User.find_by_credentials(email, password)

        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['invalid username or password'], status: 404
        end
    end
end

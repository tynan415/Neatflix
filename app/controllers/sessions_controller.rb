class SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]
   
    def destroy
        logout!
        
    end

    def create
        email = params[:user][:email]
        password = params[:user][:password]
        @user = User.find_by_credentials(email, password)

        if @user
            login!(@user)
           
        else
            
        end
    end
end

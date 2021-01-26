class Api::MyListsController < ApplicationController
    
    def show
        @mylist = current_user.lists.find_by(video_id: params[:id])
        render :show
    end

    def index
        @mylists = MyList.all
    end

    def create
        @mylist = MyList.new(list_params)
        @mylist.user_id = current_user.id 
        if @mylist.save
            render json: @mylist
        else
            render json: {message: "Failed to add this to My List"}, status: 422
        end
    end

    def destroy
        @mylist = current_user.lists.find_by(video_id: params[:id])
        if @mylist
            @mylist.destroy
            render :show
        else
            render json: {message: "Not found in my list"}, status: 422
        end
    end

    private
    def list_params
        params.require(:mylist).permit(:video_id, :user_id)
    end
end

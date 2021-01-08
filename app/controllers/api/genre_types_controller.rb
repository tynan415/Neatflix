class Api::GenreTypesController < ApplicationController
    
    def index
        @genre_types = Genre_type.all
    end

    def show
        @genre_type = Genre_type.find(params[:id])
    end
    
end

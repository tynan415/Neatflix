class Api::GenreTypesController < ApplicationController
    
    def index
        @genre_types = GenreType.all
    end

    def show
        @genre_type = GenreType.find(params[:id])
    end
    
end

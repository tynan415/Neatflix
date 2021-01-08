@genre_types.each do |genre_type|
    json.set! genre_type.id do
        json.extract! genre_type, :name, :description, :id
    end
end
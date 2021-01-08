# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Video.destroy_all
LordoftheRings = Video.create!({title: "Lord of the Rings", description: "one Ring to rule them all"})
StarWars = Video.create!({title: "Star Wars", description: "fully operational battle station"})
TheDarkKnight = Video.create!({title: "The Dark Knight", description: "The hero we deserve"})
Seven = Video.create!({title: "Se7en", description: "whats in the box"})
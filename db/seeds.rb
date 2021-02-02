# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Title = Video.create!({title: "", description: ""})
# Title.photo.attach(io: open(""), filename: '')

require 'open-uri'

Video.destroy_all
GenreType.destroy_all
VideoGenre.destroy_all

#create genres
action = GenreType.create!({name: 'Action'})
comedy = GenreType.create!({name: 'Comedy'})
drama = GenreType.create!({name: 'Drama'})

# 1 
LordoftheRings1 = Video.create!({title: "Lord of the Rings: fellowship of the ring", description: "one Ring to rule them all"})
LordoftheRings1.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/LOTRmovie.jpg"), filename: 'LOTRmovie.jpg')
LordoftheRings1.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/TheFellowshipOfTheRing.mp4'), filename: 'TheFellowshipOfTheRing.mp4', content_type: 'video')
# 2
StarWars5 = Video.create!({title: "Star Wars: The empire strikes back", description: "fully operational battle station"})
StarWars5.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/EmpireStrikes.jpg"), filename: 'EmpireStrikes.jpg')
StarWars5.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/TheEmpireStrikesBack.mp4'), filename: 'TheEmpireStrikesBack.mp4', content_type: 'video')
# 3 
TheDarkKnight = Video.create!({title: "The Dark Knight", description: "The hero we deserve"})
TheDarkKnight.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/TheDarkKnight.jpg"), filename: 'TheDarkKnight.jpg')
TheDarkKnight.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/the_dark_knight.mp4'), filename: 'the_dark_knight.mp4', content_type: 'video')    
# 4
Endgame = Video.create!({title: "Avengers: Endgame", description: "a time heist"})
Endgame.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Endgame.jpg"), filename: 'Endgame.jpg')
Endgame.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/avengers-endgame.mp4'), filename: 'avengers-endgame.mp4', content_type: 'video')
# 5
KungFuPanda = Video.create!({title: "Kung Fu Panda", description: "The Story of the Dragon Warrior"})
KungFuPanda.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/KungFuPanda.jpg"), filename: 'KungFuPanda.jpg')
KungFuPanda.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/kung_fu_panda.mp4'), filename: 'kung_fu_panda.mp4', content_type: 'video')
#6
Drive = Video.create!({title: "Drive", description: "Anything happens in that five minutes and I'm yours"})
Drive.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Drive.jpg"), filename: 'Drive.jpg')
Drive.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/drive.mp4'), filename: 'drive.mp4', content_type: 'video')
#7
GoodWillHunting = Video.create!({title: "Good Will Hunting", description: "My boy is wicked smart"})
GoodWillHunting.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/GoodWillHunting.jpg"), filename: 'GoodWillHunting.jpg')
GoodWillHunting.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/good-will-hunting.mp4'), filename: 'good-will-hunting.mp4', content_type: 'video')
#8
BlackPanther = Video.create!({title: "Black Panther", description: "Wakanda Forever"})
BlackPanther.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/BlackPanther.jpg"), filename: 'BlackPanther.jpg')
BlackPanther.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/black-panther.mp4'), filename: 'black-panther.mp4', content_type: 'video')
#9
LastBlackManSF = Video.create!({title: "The Last Black Man in San Francisco", description: "You never really own shit"})
LastBlackManSF.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/LastBlackMan.jpg"), filename: 'LastBlackMan.jpg')
LastBlackManSF.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/the-last-black-man-in-san-francisco.mp4'), filename: 'the-last-black-man-in-san-francisco.mp4', content_type: 'video')
#10
LawrenceOfArabia = Video.create!({title: "Lawrence of Arabia", description: "I am a river to my people"})
LawrenceOfArabia.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/ElLawrence.jpg"), filename: 'ElLawrence.jpg')
LawrenceOfArabia.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/LawrenceOfArabia.mp4'), filename: 'LawrenceOfArabia.mp4', content_type: 'video')
#11
InBruges = Video.create!({title: "In Bruges", description: "Your an inanimate Object"})
InBruges.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/InBruges.jpg"), filename: 'InBruges.jpg')
InBruges.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/in_bruges.mp4'), filename: 'in_bruges.mp4', content_type: 'video')
#12
Predestination = Video.create!({title: "Predestination", description: "luck is the residue of design"})
Predestination.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Predestination.jpg"), filename: 'Predestination.jpg')
Predestination.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/predestination.mp4'), filename: 'predestination.mp4', content_type: 'video')
#13
DangerousLiaisons = Video.create!({title: "Dangerous Liaisons", description: "Its beyond my control"})
DangerousLiaisons.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/DangerousLiaisons.jpg"), filename: 'DangerousLiaisons.jpg')
DangerousLiaisons.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/DangerousLiaisons.mp4'), filename: 'DangerousLiaisons.mp4', content_type: 'video')
#14
VForVendetta = Video.create!({title: "V For Vendetta", description: "England Prevails"})
VForVendetta.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/VForVendetta.jpg"), filename: 'VForVendetta.jpg')
VForVendetta.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/v_for_vendetta.mp4'), filename: 'v_for_vendetta.mp4', content_type: 'video')
#15
FindingNemo = Video.create!({title: "Finding Nemo", description: "just keep swimming"})
FindingNemo.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/FindingNemo.jpg"), filename: 'FindingNemo.jpg')
FindingNemo.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/finding_nemo.mp4'), filename: 'finding_nemo.mp4', content_type: 'video')
#16
Up = Video.create!({title: "Up", description: "I found the snipe"})
Up.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Up.jpg"), filename: 'Up.jpg')
Up.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/up.mp4'), filename: 'up.mp4', content_type: 'video')
#17
TheWatchmen = Video.create!({title: "The Watchmen", description: "Who Watches the Watchmen"})
TheWatchmen.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/TheWatchmen.jpg"), filename: 'TheWatchmen.jpg')
TheWatchmen.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/watchmen.mp4'), filename: 'watchmen.mp4', content_type: 'video')
#18
WhatWeDoInTheShadows = Video.create!({title: "What We Do In The Shadows", description: "We're vampires. We don't put down towels."})
WhatWeDoInTheShadows.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/WhatWeDoInTheShadows.jpg"), filename: 'WhatWeDoInTheShadows.jpg')
WhatWeDoInTheShadows.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/what_we_do_in_the_shadows.mp4'), filename: 'what_we_do_in_the_shadows.mp4', content_type: 'video')
#19
ThorRagnarok = Video.create!({title: "Thor: Ragnarok", description: "Hi im korg im made of rocks"})
ThorRagnarok.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/ThorRagnarok.jpg"), filename: 'ThorRagnarok.jpg')
ThorRagnarok.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/thor-ragnarok.mp4'), filename: 'thor-ragnarok.mp4', content_type: 'video')
#20
JojoRabbit = Video.create!({title: "Jojo Rabbit", description: "dancing is for people who are free"})
JojoRabbit.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/JojoRabbit.jpg"), filename: 'JojoRabbit.jpg')
JojoRabbit.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/jojo-rabbit.mp4'), filename: 'jojo-rabbit.mp4', content_type: 'video')
#21
HuntForTheWilderpeople = Video.create!({title: "Hunt For The Wilderpeople", description: "I didnt choose the skux life"})
HuntForTheWilderpeople.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/HuntForTheWilderpeople.jpg"), filename: 'HuntForTheWilderpeople.jpg')
HuntForTheWilderpeople.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/hunt_for_the_wilder_people.mp4'), filename: 'hunt_for_the_wilder_people.mp4', content_type: 'video')
# 22
Deadpool = Video.create!({title: "Deadpool", description: "Am I crazy, or is your hand really small?"})
Deadpool.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Deadpool.jpg"), filename: 'Deadpool.jpg')
Deadpool.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/deadpool.mp4'), filename: 'deadpool.mp4', content_type: 'video')
#23
Desperado = Video.create!({title: "Desperado", description: "Easier to destroy then create"})
Desperado.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Desperado.jpg"), filename: 'Desperado.jpg')
Desperado.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/Desparado.mp4'), filename: 'Desparado.mp4', content_type: 'video')
#24
DjangoUnchained = Video.create!({title: "Django Unchained", description: "Now you have my attention"})
DjangoUnchained.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/DjangoUnchained.jpg"), filename: 'DjangoUnchained.jpg')
DjangoUnchained.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/django.mp4'), filename: 'django.mp4', content_type: 'video')
#25
JurassicPark = Video.create!({title: "Jurassic Park", description: "clever girl"})
JurassicPark.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/JurassicPark.jpg"), filename: 'JurassicPark.jpg')
JurassicPark.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/jurrasicpark.mp4'), filename: 'jurrasicpark.mp4', content_type: 'video')
#26
SchindlersList = Video.create!({title: "Schindlers List", description: "Some day this is all going to end"})
SchindlersList.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/SchindlersList.jpg"), filename: 'SchindlersList.jpg')
SchindlersList.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/schindlers-list.mp4'), filename: 'schindlers-list.mp4', content_type: 'video')
#27
GuardiansOfTheGalaxy = Video.create!({title: "Guardians Of The Galaxy", description: "We are groot"})
GuardiansOfTheGalaxy.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/GuardiansOfTheGalaxy.jpg"), filename: 'GuardiansOfTheGalaxy.jpg')
GuardiansOfTheGalaxy.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/GuardiansOfTheGalaxy.mp4'), filename: 'GuardiansOfTheGalaxy.mp4', content_type: 'video')
#28
UndercoverBrother = Video.create!({title: "Undercover Brother", description: "Let me tell you something about the word good"})
UndercoverBrother.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/UndercoverBrother.jpg"), filename: 'UndercoverBrother.jpg')
UndercoverBrother.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/UndercoverBrother.mp4'), filename: 'UndercoverBrother.mp4', content_type: 'video')
#29
OverTheGardenWall = Video.create!({title: "Over The Garden Wall", description: "that old frog oh mine is giving me the run around"})
OverTheGardenWall.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/OverTheGardenWall.jpg"), filename: 'OverTheGardenWall.jpg')
OverTheGardenWall.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/OverTheGardenWall.mp4'), filename: 'OverTheGardenWall.mp4', content_type: 'video')
#30
WandaVision = Video.create!({title: "Wanda Vision", description: "Who is doing this to you wanda"})
WandaVision.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/WandaVision.jpg"), filename: 'WandaVision.jpg')
WandaVision.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/WandaVision.mp4'), filename: 'WandaVision.mp4', content_type: 'video')
#31
Rome = Video.create!({title: "Rome", description: "titus pullo saves rome"})
Rome.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Rome.jpg"), filename: 'Rome.jpg')
Rome.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Vid+Files/Rome.mp4'), filename: 'Rome.mp4', content_type: 'video')

# action
action01 = VideoGenre.create!({video_id: LordoftheRings1.id, genre_type_id: action.id})
action02 = VideoGenre.create!({video_id: StarWars5.id, genre_type_id: action.id})
action03 = VideoGenre.create!({video_id: TheDarkKnight.id, genre_type_id: action.id})
action04 = VideoGenre.create!({video_id: Endgame.id, genre_type_id: action.id})
action05 = VideoGenre.create!({video_id: BlackPanther.id, genre_type_id: action.id})
action06 = VideoGenre.create!({video_id: VForVendetta.id, genre_type_id: action.id})
action07 = VideoGenre.create!({video_id: TheWatchmen.id, genre_type_id: action.id})
action08 = VideoGenre.create!({video_id: Desperado.id, genre_type_id: action.id})
action09 = VideoGenre.create!({video_id: DjangoUnchained.id, genre_type_id: action.id})
action10 = VideoGenre.create!({video_id: JurassicPark.id, genre_type_id: action.id})

# drama
drama01 = VideoGenre.create!({video_id: Drive.id, genre_type_id: drama.id})
drama02 = VideoGenre.create!({video_id: GoodWillHunting.id, genre_type_id: drama.id})
drama03 = VideoGenre.create!({video_id: LastBlackManSF.id, genre_type_id: drama.id})
drama04 = VideoGenre.create!({video_id: LawrenceOfArabia.id, genre_type_id: drama.id})
drama05 = VideoGenre.create!({video_id: Predestination.id, genre_type_id: drama.id})
drama06 = VideoGenre.create!({video_id: DangerousLiaisons.id, genre_type_id: drama.id})
drama07 = VideoGenre.create!({video_id: SchindlersList.id, genre_type_id: drama.id})
drama08 = VideoGenre.create!({video_id: OverTheGardenWall.id, genre_type_id: drama.id})
drama09 = VideoGenre.create!({video_id: WandaVision.id, genre_type_id: drama.id})
drama10 = VideoGenre.create!({video_id: Rome.id, genre_type_id: drama.id})

# comedy
comedy01 = VideoGenre.create!({video_id: KungFuPanda.id, genre_type_id: comedy.id})
comedy02 = VideoGenre.create!({video_id: UndercoverBrother.id, genre_type_id: comedy.id})
comedy03 = VideoGenre.create!({video_id: InBruges.id, genre_type_id: comedy.id})
comedy04 = VideoGenre.create!({video_id: Up.id, genre_type_id: comedy.id})
comedy05 = VideoGenre.create!({video_id: FindingNemo.id, genre_type_id: comedy.id})
comedy06 = VideoGenre.create!({video_id: WhatWeDoInTheShadows.id, genre_type_id: comedy.id})
comedy07 = VideoGenre.create!({video_id: ThorRagnarok.id, genre_type_id: comedy.id})
comedy08 = VideoGenre.create!({video_id: JojoRabbit.id, genre_type_id: comedy.id})
comedy09 = VideoGenre.create!({video_id: HuntForTheWilderpeople.id, genre_type_id: comedy.id})
comedy10 = VideoGenre.create!({video_id: Deadpool.id, genre_type_id: comedy.id})
comedy11 = VideoGenre.create!({video_id: GuardiansOfTheGalaxy.id, genre_type_id: comedy.id})
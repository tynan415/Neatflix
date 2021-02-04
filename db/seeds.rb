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

#1
DjangoUnchained = Video.create!({title: "Django Unchained", description: "movie"})
DjangoUnchained.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/DjangoUnchained.jpg"), filename: 'DjangoUnchained.jpg')
DjangoUnchained.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/django.mp4'), filename: 'django.mp4', content_type: 'video')
#2
TheDarkKnight = Video.create!({title: "The Dark Knight", description: "movie"})
TheDarkKnight.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/TheDarkKnight.jpg"), filename: 'TheDarkKnight.jpg')
TheDarkKnight.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/the_dark_knight.mp4'), filename: 'the_dark_knight.mp4', content_type: 'video')    
#3 
Drive = Video.create!({title: "Drive", description: "movie"})
Drive.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/Drive.jpg"), filename: 'Drive.jpg')
Drive.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/drive.mp4'), filename: 'drive.mp4', content_type: 'video')
#4
LastBlackManSF = Video.create!({title: "The Last Black Man in San Francisco", description: "movie"})
LastBlackManSF.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/LastBlackMan.jpg"), filename: 'LastBlackMan.jpg')
LastBlackManSF.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/the-last-black-man-in-san-francisco.mp4'), filename: 'the-last-black-man-in-san-francisco.mp4', content_type: 'video')
#5
Predestination = Video.create!({title: "Predestination", description: "movie"})
Predestination.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/Predestination.jpg"), filename: 'Predestination.jpg')
Predestination.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/predestination.mp4'), filename: 'predestination.mp4', content_type: 'video')
#6
DangerousLiaisons = Video.create!({title: "Dangerous Liaisons", description: "movie"})
DangerousLiaisons.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/DangerousLiaisons.jpg"), filename: 'DangerousLiaisons.jpg')
DangerousLiaisons.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/DangerousLiaisons.mp4'), filename: 'DangerousLiaisons.mp4', content_type: 'video')
#7
OverTheGardenWall = Video.create!({title: "Over The Garden Wall", description: "show"})
OverTheGardenWall.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/OverTheGardenWall.jpg"), filename: 'OverTheGardenWall.jpg')
OverTheGardenWall.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/OverTheGardenWall.mp4'), filename: 'OverTheGardenWall.mp4', content_type: 'video')
#8
WandaVision = Video.create!({title: "Wanda Vision", description: "show"})
WandaVision.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/WandaVision.jpg"), filename: 'WandaVision.jpg')
WandaVision.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/WandaVision.mp4'), filename: 'WandaVision.mp4', content_type: 'video')
#9
Rome = Video.create!({title: "Rome", description: "show"})
Rome.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/Rome.jpg"), filename: 'Rome.jpg')
Rome.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/Rome.mp4'), filename: 'Rome.mp4', content_type: 'video')
#10
GameOfThrones = Video.create!({title: "Game of Thrones", description: "show"})
GameOfThrones.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/GOT.jpg"), filename: 'GOT.jpg')
GameOfThrones.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/Game+of+Thrones.mp4'), filename: 'Game+of+Thrones.mp4', content_type: 'video')
#11
DoctorWho = Video.create!({title: "Doctor Who", description: "show"})
DoctorWho.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/Doctor_Who.png"), filename: 'Doctor_Who.png')
DoctorWho.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/DoctorWho.mp4'), filename: 'DoctorWho.mp4', content_type: 'video')
#12
AvatarTheLastAirbender = Video.create!({title: "Avatar the last Airbender", description: "show"})
AvatarTheLastAirbender.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/avatar.jpg"), filename: 'avatar.jpg')
AvatarTheLastAirbender.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/The+Last+Airbender.mp4'), filename: 'The+Last+Airbender.mp4', content_type: 'video')
#13
TheMandalorian = Video.create!({title: "The Mandalorian", description: "show"})
TheMandalorian.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/mandalorian.jpg"), filename: 'mandalorian.jpg')
TheMandalorian.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/The+Mandalorian.mp4'), filename: 'The+Mandalorian.mp4', content_type: 'video')
#14
TheWitcher = Video.create!({title: "The Witcher", description: "show"})
TheWitcher.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/TheWitcher.png"), filename: 'TheWitcher.png')
TheWitcher.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/TheWitcher.mp4'), filename: 'TheWitcher.mp4', content_type: 'video')
#15
DoomPatrol = Video.create!({title: "Doom Patrol", description: "show"})
DoomPatrol.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/Doom+Patrol.jpg"), filename: 'Doom+Patrol.jpg')
DoomPatrol.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/Doom+Patrol.mp4'), filename: 'Doom+Patrol.mp4', content_type: 'video')
#16
SamuraiJack = Video.create!({title: "Samurai Jack", description: "show"})
SamuraiJack.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/SamuraiJack.jpg"), filename: 'SamuraiJack.jpg')
SamuraiJack.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/Samurai+Jack.mp4'), filename: 'Samurai+Jack.mp4', content_type: 'video')
#17
StarWars5 = Video.create!({title: "Star Wars: The empire strikes back", description: "movie"})
StarWars5.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/EmpireStrikes.jpg"), filename: 'EmpireStrikes.jpg')
StarWars5.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/TheEmpireStrikesBack.mp4'), filename: 'TheEmpireStrikesBack.mp4', content_type: 'video')
#18
SiliconValley = Video.create!({title: "Silicon Valley", description: "show"})
SiliconValley.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/siliconValley.jpg"), filename: 'siliconValley.jpg')
SiliconValley.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/Silicon+Valley.mp4'), filename: 'Silicon+Valley.mp4', content_type: 'video')
#19
Futurama = Video.create!({title: "Futurama", description: "show"})
Futurama.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/Futurama.jpg"), filename: 'Futurama.jpg')
Futurama.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/Futurama.mp4'), filename: 'Futurama.mp4', content_type: 'video')
#20
ArrestedDevelopment = Video.create!({title: "Arrested Development", description: "show"})
ArrestedDevelopment.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/arrested_development.jpg"), filename: 'arrested_development.jpg')
ArrestedDevelopment.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/Arrested+Development.mp4'), filename: 'Arrested+Development.mp4', content_type: 'video')
#21
InBruges = Video.create!({title: "In Bruges", description: "movie"})
InBruges.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/InBruges.jpg"), filename: 'InBruges.jpg')
InBruges.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/in_bruges.mp4'), filename: 'in_bruges.mp4', content_type: 'video')
#22
Deadpool = Video.create!({title: "Deadpool", description: "movie"})
Deadpool.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/Deadpool.jpg"), filename: 'Deadpool.jpg')
Deadpool.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/deadpool.mp4'), filename: 'deadpool.mp4', content_type: 'video')
#23
UndercoverBrother = Video.create!({title: "Undercover Brother", description: "movie"})
UndercoverBrother.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/UndercoverBrother.jpg"), filename: 'UndercoverBrother.jpg')
UndercoverBrother.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/UndercoverBrother.mp4'), filename: 'UndercoverBrother.mp4', content_type: 'video')
#24
WhatWeDoInTheShadows = Video.create!({title: "What We Do In The Shadows", description: "movie"})
WhatWeDoInTheShadows.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/WhatWeDoInTheShadows.jpg"), filename: 'WhatWeDoInTheShadows.jpg')
WhatWeDoInTheShadows.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/what_we_do_in_the_shadows.mp4'), filename: 'what_we_do_in_the_shadows.mp4', content_type: 'video')
#25
GuardiansOfTheGalaxy = Video.create!({title: "Guardians Of The Galaxy", description: "movie"})
GuardiansOfTheGalaxy.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/GuardiansOfTheGalaxy.jpg"), filename: 'GuardiansOfTheGalaxy.jpg')
GuardiansOfTheGalaxy.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/GuardiansOfTheGalaxy.mp4'), filename: 'GuardiansOfTheGalaxy.mp4', content_type: 'video')
#26
ParksAndRec = Video.create!({title: "Parks And Recreation", description: "show"})
ParksAndRec.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/parksNrec.jpg"), filename: 'parksNrec.jpg')
ParksAndRec.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/Parks+%26+Recreation.mp4'), filename: 'Parks+%26+Recreation.mp4', content_type: 'video')
#27
SouthPark = Video.create!({title: "Sout Park", description: "show"})
SouthPark.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/SouthPark.jpg"), filename: 'SouthPark.jpg')
SouthPark.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/South+Park.mp4'), filename: 'South+Park.mp4', content_type: 'video')
#28
JurassicPark = Video.create!({title: "Jurassic Park", description: "movie"})
JurassicPark.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/JurassicPark.png"), filename: 'JurassicPark.png')
JurassicPark.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/jurrasicpark.mp4'), filename: 'jurrasicpark.mp4', content_type: 'video')
#29
Desperado = Video.create!({title: "Desperado", description: "movie"})
Desperado.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/Desperado.jpg"), filename: 'Desperado.jpg')
Desperado.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/Desparado.mp4'), filename: 'Desparado.mp4', content_type: 'video')
#30
LawrenceOfArabia = Video.create!({title: "Lawrence of Arabia", description: "movie"})
LawrenceOfArabia.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Photos/ElLawrence.jpg"), filename: 'ElLawrence.jpg')
LawrenceOfArabia.video_url.attach(io: open('https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Videos/LawrenceOfArabia.mp4'), filename: 'LawrenceOfArabia.mp4', content_type: 'video')

# action
action06 = VideoGenre.create!({video_id: AvatarTheLastAirbender.id, genre_type_id: action.id})
action07 = VideoGenre.create!({video_id: TheMandalorian.id, genre_type_id: action.id})
action01 = VideoGenre.create!({video_id: StarWars5.id, genre_type_id: action.id})
action02 = VideoGenre.create!({video_id: DjangoUnchained.id, genre_type_id: action.id})
action08 = VideoGenre.create!({video_id: TheWitcher.id, genre_type_id: action.id})
action03 = VideoGenre.create!({video_id: JurassicPark.id, genre_type_id: action.id})
action04 = VideoGenre.create!({video_id: Desperado.id, genre_type_id: action.id})
action10 = VideoGenre.create!({video_id: SamuraiJack.id, genre_type_id: action.id})
action09 = VideoGenre.create!({video_id: DoomPatrol.id, genre_type_id: action.id})
action05 = VideoGenre.create!({video_id: TheDarkKnight.id, genre_type_id: action.id})


# drama
drama06 = VideoGenre.create!({video_id: OverTheGardenWall.id, genre_type_id: drama.id})
drama01 = VideoGenre.create!({video_id: Drive.id, genre_type_id: drama.id})
drama02 = VideoGenre.create!({video_id: LastBlackManSF.id, genre_type_id: drama.id})
drama08 = VideoGenre.create!({video_id: Rome.id, genre_type_id: drama.id})
drama03 = VideoGenre.create!({video_id: LawrenceOfArabia.id, genre_type_id: drama.id})
drama04 = VideoGenre.create!({video_id: Predestination.id, genre_type_id: drama.id})
drama09 = VideoGenre.create!({video_id: GameOfThrones.id, genre_type_id: drama.id})
drama05 = VideoGenre.create!({video_id: DangerousLiaisons.id, genre_type_id: drama.id})
drama10 = VideoGenre.create!({video_id: DoctorWho.id, genre_type_id: drama.id})
drama07 = VideoGenre.create!({video_id: WandaVision.id, genre_type_id: drama.id})

# comedy
comedy01 = VideoGenre.create!({video_id: InBruges.id, genre_type_id: comedy.id})
comedy09 = VideoGenre.create!({video_id: SiliconValley.id, genre_type_id: comedy.id})
comedy02 = VideoGenre.create!({video_id: Deadpool.id, genre_type_id: comedy.id})
comedy06 = VideoGenre.create!({video_id: ParksAndRec.id, genre_type_id: comedy.id})
comedy03 = VideoGenre.create!({video_id: UndercoverBrother.id, genre_type_id: comedy.id})
comedy07 = VideoGenre.create!({video_id: Futurama.id, genre_type_id: comedy.id})
comedy04 = VideoGenre.create!({video_id: WhatWeDoInTheShadows.id, genre_type_id: comedy.id})
comedy05 = VideoGenre.create!({video_id: GuardiansOfTheGalaxy.id, genre_type_id: comedy.id})
comedy08 = VideoGenre.create!({video_id: ArrestedDevelopment.id, genre_type_id: comedy.id})
comedy10 = VideoGenre.create!({video_id: SouthPark.id, genre_type_id: comedy.id})


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
# 2
StarWars5 = Video.create!({title: "Star Wars: The empire strikes back", description: "fully operational battle station"})
StarWars5.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/EmpireStrikes.jpg"), filename: 'EmpireStrikes.jpg')
# 3 
TheDarkKnight = Video.create!({title: "The Dark Knight", description: "The hero we deserve"})
TheDarkKnight.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/TheDarkKnight.jpg"), filename: 'TheDarkKnight.jpg')
# 4
Seven = Video.create!({title: "Se7en", description: "whats in the box"})
Seven.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Seven.jpg"), filename: 'Seven.jpg')
# 5
Endgame = Video.create!({title: "Avengers: Endgame", description: "a time heist"})
Endgame.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Endgame.jpg"), filename: 'Endgame.jpg')
# 6 
KungFuPanda = Video.create!({title: "Kung Fu Panda", description: "The Story of the Dragon Warrior"})
KungFuPanda.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/KungFuPanda.jpg"), filename: 'KungFuPanda.jpg')
#7
Drive = Video.create!({title: "Drive", description: "Anything happens in that five minutes and I'm yours"})
Drive.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Drive.jpg"), filename: 'Drive.jpg')
#8
Shrek = Video.create!({title: "Shrek", description: "get out of my swamp"})
Shrek.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Shrek.png"), filename: 'Shrek.png')
#9
ForestGump = Video.create!({title: "Forest Gump", description: "life is like a box of chocolates"})
ForestGump.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/ForestGump.jpg"), filename: 'ForestGump.jpg')
#10
GoodWillHunting = Video.create!({title: "Good Will Hunting", description: "My boy is wicked smart"})
GoodWillHunting.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/GoodWillHunting.jpg"), filename: 'GoodWillHunting.jpg')
#11
BlackPanther = Video.create!({title: "Black Panther", description: "Wakanda Forever"})
BlackPanther.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/BlackPanther.jpg"), filename: 'BlackPanther.jpg')
#12
CaptainMarvel = Video.create!({title: "Captain Marvel", description: "Thats not a cat"})
CaptainMarvel.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/CaptianMarvel.jpg"), filename: 'CaptianMarvel.jpg')
#13
LastBlackManSF = Video.create!({title: "The Last Black Man in San Francisco", description: "You never really own shit"})
LastBlackManSF.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/LastBlackMan.jpg"), filename: 'LastBlackMan.jpg')
#14
LawrenceOfArabia = Video.create!({title: "Lawrence of Arabia", description: "I am a river to my people"})
LawrenceOfArabia.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/ElLawrence.jpg"), filename: 'ElLawrence.jpg')
#15
ShadowInTheCloud = Video.create!({title: "Shadow in the Cloud", description: "Theres something on the plane"})
ShadowInTheCloud.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/ShadowInTheCloud.jpg"), filename: 'ShadowInTheCloud.jpg')
#16
InBruges = Video.create!({title: "In Bruges", description: "Your an inanimate Object"})
InBruges.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/InBruges.jpg"), filename: 'InBruges.jpg')
#17
TheGuard = Video.create!({title: "The Guard", description: "a beatiful morning"})
TheGuard.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/TheGuard.jpg"), filename: 'TheGuard.jpg')
#18
Predestination = Video.create!({title: "Predestination", description: "luck is the residue of design"})
Predestination.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Predestination.jpg"), filename: 'Predestination.jpg')
#19
TheCountOfMonteCristo = Video.create!({title: "The Count Of Monte Cristo", description: "Once again, Zatarra, God sees you out of the corner of His eye"})
TheCountOfMonteCristo.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/TheCountOfMonteCristo.jpg"), filename: 'TheCountOfMonteCristo.jpg')
#20
DangerousLiaisons = Video.create!({title: "Dangerous Liaisons", description: "Its beyond my control"})
DangerousLiaisons.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/DangerousLiaisons.jpg"), filename: 'DangerousLiaisons.jpg')
#21
VForVendetta = Video.create!({title: "V For Vendetta", description: "England Prevails"})
VForVendetta.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/VForVendetta.jpg"), filename: 'VForVendetta.jpg')
#22
FindingNemo = Video.create!({title: "Finding Nemo", description: "just keep swimming"})
FindingNemo.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/FindingNemo.jpg"), filename: 'FindingNemo.jpg')
#23
Up = Video.create!({title: "Up", description: "I found the snipe"})
Up.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Up.jpg"), filename: 'Up.jpg')
#24
TheWatchmen = Video.create!({title: "The Watchmen", description: "Who Watches the Watchmen"})
TheWatchmen.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/TheWatchmen.jpg"), filename: 'TheWatchmen.jpg')
#25
WhatWeDoInTheShadows = Video.create!({title: "What We Do In The Shadows", description: "We're vampires. We don't put down towels."})
WhatWeDoInTheShadows.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/WhatWeDoInTheShadows.jpg"), filename: 'WhatWeDoInTheShadows.jpg')
#26
ThorRagnarok = Video.create!({title: "Thor: Ragnarok", description: "Hi im korg im made of rocks"})
ThorRagnarok.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/ThorRagnarok.jpg"), filename: 'ThorRagnarok.jpg')
#27
JojoRabbit = Video.create!({title: "Jojo Rabbit", description: "dancing is for people who are free"})
JojoRabbit.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/JojoRabbit.jpg"), filename: 'JojoRabbit.jpg')
#28
HuntForTheWilderpeople = Video.create!({title: "Hunt For The Wilderpeople", description: "I didnt choose the skux life"})
HuntForTheWilderpeople.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/HuntForTheWilderpeople.jpg"), filename: 'HuntForTheWilderpeople.jpg')
# 29
Deadpool = Video.create!({title: "Deadpool", description: "Am I crazy, or is your hand really small?"})
Deadpool.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Deadpool.jpg"), filename: 'Deadpool.jpg')
#30
Desperado = Video.create!({title: "Desperado", description: "Easier to destroy then create"})
Desperado.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Desperado.jpg"), filename: 'Desperado.jpg')
#31
DjangoUnchained = Video.create!({title: "Django Unchained", description: "Now you have my attention"})
DjangoUnchained.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/DjangoUnchained.jpg"), filename: 'DjangoUnchained.jpg')
#32
EnemyAtTheGates = Video.create!({title: "Enemy At The Gates", description: "sad to have a dream you know wont happen"})
EnemyAtTheGates.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/EnemyAtTheGates.jpg"), filename: 'EnemyAtTheGates.jpg')
#33
JurassicPark = Video.create!({title: "Jurassic Park", description: "clever girl"})
JurassicPark.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/JurassicPark.jpg"), filename: 'JurassicPark.jpg')
#34
SavingPrivateRyan = Video.create!({title: "Saving Private Ryan", description: "I was with the only brothers I had left"})
SavingPrivateRyan.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/SavingPrivateRyan.jpg"), filename: 'SavingPrivateRyan.jpg')
#35
SchindlersList = Video.create!({title: "Schindlers List", description: "Some day this is all going to end"})
SchindlersList.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/SchindlersList.jpg"), filename: 'SchindlersList.jpg')
#36
GuardiansOfTheGalaxy = Video.create!({title: "Guardians Of The Galaxy", description: "We are groot"})
GuardiansOfTheGalaxy.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/GuardiansOfTheGalaxy.jpg"), filename: 'GuardiansOfTheGalaxy.jpg')
#37
UndercoverBrother = Video.create!({title: "Undercover Brother", description: "Let me tell you something about the word good"})
UndercoverBrother.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/UndercoverBrother.jpg"), filename: 'UndercoverBrother.jpg')
#38
Fargo = Video.create!({title: "Fargo", description: "Let me tell you what's gonna happen, Officer"})
Fargo.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Fargo.jpg"), filename: 'Fargo.jpg')
#39
OverTheGardenWall = Video.create!({title: "Over The Garden Wall", description: "that old frog oh mine is giving me the run around"})
OverTheGardenWall.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/OverTheGardenWall.jpg"), filename: 'OverTheGardenWall.jpg')
#40
RickAndMorty = Video.create!({title: "Rick And Morty", description: "burp"})
RickAndMorty.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/RickAndMorty.jpg"), filename: 'RickAndMorty.jpg')
#41
TheMandalorian = Video.create!({title: "The Mandalorian", description: "baby yoda"})
TheMandalorian.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/TheMandalorian.jpg"), filename: 'TheMandalorian.jpg')
#42
TheWitcher = Video.create!({title: "The Witcher", description: "Toss a coin to your witcher"})
TheWitcher.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/TheWitcher.jpg"), filename: 'TheWitcher.jpg')
#43
WandaVision = Video.create!({title: "Wanda Vision", description: "Who is doing this to you wanda"})
WandaVision.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/WandaVision.jpg"), filename: 'WandaVision.jpg')
#44
BoardwalkEmpire = Video.create!({title: "Boardwalk Empire", description: "atlantic city"})
BoardwalkEmpire.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/BoardwalkEmpire.png"), filename: 'BoardwalkEmpire.png')
#45
CowboyBebop = Video.create!({title: "Cowboy Bebop", description: "see ya space cowboy"})
CowboyBebop.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/CowboyBebop.jpg"), filename: 'CowboyBebop.jpg')
#46
Rome = Video.create!({title: "Rome", description: "titus pullo saves rome"})
Rome.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/Rome.jpg"), filename: 'Rome.jpg')
#47
SamuraiJack = Video.create!({title: "Samurai Jack", description: "long ago in a distant land"})
SamuraiJack.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/SamuraiJack.jpg"), filename: 'SamuraiJack.jpg')
#48
TheBoys = Video.create!({title: "The Boys", description: "The Bad Guys Don't Get Punished"})
TheBoys.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/TheBoys.jpg"), filename: 'TheBoys.jpg')
# genre^
#49
TrueDetective = Video.create!({title: "True Detective", description: "time is a flat circle"})
TrueDetective.photo.attach(io: open("https://neatflix-415-dev.s3-us-west-1.amazonaws.com/TrueDetective.png"), filename: 'TrueDetective.png')


# action
action01 = VideoGenre.create!({video_id: LordoftheRings1.id, genre_type_id: action.id})
action02 = VideoGenre.create!({video_id: StarWars5.id, genre_type_id: action.id})
action03 = VideoGenre.create!({video_id: TheDarkKnight.id, genre_type_id: action.id})
action04 = VideoGenre.create!({video_id: Endgame.id, genre_type_id: action.id})
action05 = VideoGenre.create!({video_id: BlackPanther.id, genre_type_id: action.id})
action06 = VideoGenre.create!({video_id: CaptainMarvel.id, genre_type_id: action.id})
action07 = VideoGenre.create!({video_id: ShadowInTheCloud.id, genre_type_id: action.id})
action08 = VideoGenre.create!({video_id: VForVendetta.id, genre_type_id: action.id})
action09 = VideoGenre.create!({video_id: TheWatchmen.id, genre_type_id: action.id})
action10 = VideoGenre.create!({video_id: Desperado.id, genre_type_id: action.id})
action11 = VideoGenre.create!({video_id: DjangoUnchained.id, genre_type_id: action.id})
action12 = VideoGenre.create!({video_id: EnemyAtTheGates.id, genre_type_id: action.id})
action13 = VideoGenre.create!({video_id: JurassicPark.id, genre_type_id: action.id})
action14 = VideoGenre.create!({video_id: SavingPrivateRyan.id, genre_type_id: action.id})
action15 = VideoGenre.create!({video_id: TheMandalorian.id, genre_type_id: action.id})
action16 = VideoGenre.create!({video_id: TheWitcher.id, genre_type_id: action.id})
action17 = VideoGenre.create!({video_id: SamuraiJack.id, genre_type_id: action.id})
action18 = VideoGenre.create!({video_id: TheBoys.id, genre_type_id: action.id})

# drama
drama01 = VideoGenre.create!({video_id: Seven.id, genre_type_id: drama.id})
drama02 = VideoGenre.create!({video_id: Drive.id, genre_type_id: drama.id})
drama03 = VideoGenre.create!({video_id: ForestGump.id, genre_type_id: drama.id})
drama04 = VideoGenre.create!({video_id: GoodWillHunting.id, genre_type_id: drama.id})
drama05 = VideoGenre.create!({video_id: LastBlackManSF.id, genre_type_id: drama.id})
drama06 = VideoGenre.create!({video_id: LawrenceOfArabia.id, genre_type_id: drama.id})
drama07 = VideoGenre.create!({video_id: Predestination.id, genre_type_id: drama.id})
drama08 = VideoGenre.create!({video_id: TheCountOfMonteCristo.id, genre_type_id: drama.id})
drama09 = VideoGenre.create!({video_id: DangerousLiaisons.id, genre_type_id: drama.id})
drama10 = VideoGenre.create!({video_id: Up.id, genre_type_id: drama.id})
drama11 = VideoGenre.create!({video_id: SchindlersList.id, genre_type_id: drama.id})
drama12 = VideoGenre.create!({video_id: Fargo.id, genre_type_id: drama.id})
drama13 = VideoGenre.create!({video_id: OverTheGardenWall.id, genre_type_id: drama.id})
drama14 = VideoGenre.create!({video_id: WandaVision.id, genre_type_id: drama.id})
drama15 = VideoGenre.create!({video_id: BoardwalkEmpire.id, genre_type_id: drama.id})
drama16 = VideoGenre.create!({video_id: CowboyBebop.id, genre_type_id: drama.id})
drama17 = VideoGenre.create!({video_id: Rome.id, genre_type_id: drama.id})
drama18 = VideoGenre.create!({video_id: TrueDetective.id, genre_type_id: drama.id})

# comedy
comedy01 = VideoGenre.create!({video_id: KungFuPanda.id, genre_type_id: comedy.id})
comedy02 = VideoGenre.create!({video_id: Shrek.id, genre_type_id: comedy.id})
comedy03 = VideoGenre.create!({video_id: InBruges.id, genre_type_id: comedy.id})
comedy04 = VideoGenre.create!({video_id: TheGuard.id, genre_type_id: comedy.id})
comedy05 = VideoGenre.create!({video_id: FindingNemo.id, genre_type_id: comedy.id})
comedy06 = VideoGenre.create!({video_id: WhatWeDoInTheShadows.id, genre_type_id: comedy.id})
comedy07 = VideoGenre.create!({video_id: ThorRagnarok.id, genre_type_id: comedy.id})
comedy08 = VideoGenre.create!({video_id: JojoRabbit.id, genre_type_id: comedy.id})
comedy09 = VideoGenre.create!({video_id: HuntForTheWilderpeople.id, genre_type_id: comedy.id})
comedy10 = VideoGenre.create!({video_id: Deadpool.id, genre_type_id: comedy.id})
comedy11 = VideoGenre.create!({video_id: GuardiansOfTheGalaxy.id, genre_type_id: comedy.id})
comedy12 = VideoGenre.create!({video_id: UndercoverBrother.id, genre_type_id: comedy.id})
comedy13 = VideoGenre.create!({video_id: RickAndMorty.id, genre_type_id: comedy.id})

// From https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases
// Used by github.com/cryptag/cryptag/share
const effWordlist = [
  "Aardvark", "Abandoned", "Abbreviate", "Abdomen", "Abhorrence", "Abiding", "Abnormal", "Abrasion", "Absorbing", "Abundant", "Abyss", "Academy", "Accountant", "Acetone", "Achiness", "Acid", "Acoustics", "Acquire", "Acrobat", "Actress", "Acuteness", "Aerosol", "Aesthetic", "Affidavit", "Afloat", "Afraid", "Aftershave", "Again", "Agency", "Aggressor", "Aghast", "Agitate", "Agnostic", "Agonizing", "Agreeing", "Aidless", "Aimlessly", "Ajar", "Alarmclock", "Albatross", "Alchemy", "Alfalfa", "Algae", "Aliens", "Alkaline", "Almanac", "Alongside", "Alphabet", "Already", "Also", "Altitude", "Aluminum", "Always", "Amazingly", "Ambulance", "Amendment", "Amiable", "Ammunition", "Amnesty", "Amoeba", "Amplifier", "Amuser", "Anagram", "Anchor", "Android", "Anesthesia", "Angelfish", "Animal", "Anklet", "Announcer", "Anonymous", "Answer", "Antelope", "Anxiety", "Anyplace", "Aorta", "Apartment", "Apnea", "Apostrophe", "Apple", "Apricot", "Aquamarine", "Arachnid", "Arbitrate", "Ardently", "Arena", "Argument", "Aristocrat", "Armchair", "Aromatic", "Arrowhead", "Arsonist", "Artichoke", "Asbestos", "Ascend", "Aseptic", "Ashamed", "Asinine", "Asleep", "Asocial", "Asparagus", "Astronaut", "Asymmetric", "Atlas", "Atmosphere", "Atom", "Atrocious", "Attic", "Atypical", "Auctioneer", "Auditorium", "Augmented", "Auspicious", "Automobile", "Auxiliary", "Avalanche", "Avenue", "Aviator", "Avocado", "Awareness", "Awhile", "Awkward", "Awning", "Awoke", "Axially", "Azalea", "Babbling", "Backpack", "Badass", "Bagpipe", "Bakery", "Balancing", "Bamboo", "Banana", "Barracuda", "Basket", "Bathrobe", "Bazooka", "Blade", "Blender", "Blimp", "Blouse", "Blurred", "Boatyard", "Bobcat", "Body", "Bogusness", "Bohemian", "Boiler", "Bonnet", "Boots", "Borough", "Bossiness", "Bottle", "Bouquet", "Boxlike", "Breath", "Briefcase", "Broom", "Brushes", "Bubblegum", "Buckle", "Buddhist", "Buffalo", "Bullfrog", "Bunny", "Busboy", "Buzzard", "Cabin", "Cactus", "Cadillac", "Cafeteria", "Cage", "Cahoots", "Cajoling", "Cakewalk", "Calculator", "Camera", "Canister", "Capsule", "Carrot", "Cashew", "Cathedral", "Caucasian", "Caviar", "Ceasefire", "Cedar", "Celery", "Cement", "Census", "Ceramics", "Cesspool", "Chalkboard", "Cheesecake", "Chimney", "Chlorine", "Chopsticks", "Chrome", "Chute", "Cilantro", "Cinnamon", "Circle", "Cityscape", "Civilian", "Clay", "Clergyman", "Clipboard", "Clock", "Clubhouse", "Coathanger", "Cobweb", "Coconut", "Codeword", "Coexistent", "Coffeecake", "Cognitive", "Cohabitate", "Collarbone", "Computer", "Confetti", "Copier", "Cornea", "Cosmetics", "Cotton", "Couch", "Coverless", "Coyote", "Coziness", "Crawfish", "Crewmember", "Crib", "Croissant", "Crumble", "Crystal", "Cubical", "Cucumber", "Cuddly", "Cufflink", "Cuisine", "Culprit", "Cup", "Curry", "Cushion", "Cuticle", "Cybernetic", "Cyclist", "Cylinder", "Cymbal", "Cynicism", "Cypress", "Cytoplasm", "Dachshund", "Daffodil", "Dagger", "Dairy", "Dalmatian", "Dandelion", "Dartboard", "Dastardly", "Datebook", "Daughter", "Dawn", "Daytime", "Dazzler", "Dealer", "Debris", "Decal", "Dedicate", "Deepness", "Defrost", "Degree", "Dehydrator", "Deliverer", "Democrat", "Dentist", "Deodorant", "Depot", "Deranged", "Desktop", "Detergent", "Device", "Dexterity", "Diamond", "Dibs", "Dictionary", "Diffuser", "Digit", "Dilated", "Dimple", "Dinnerware", "Dioxide", "Diploma", "Directory", "Dishcloth", "Ditto", "Dividers", "Dizziness", "Doctor", "Dodge", "Doll", "Dominoes", "Donut", "Doorstep", "Dorsal", "Double", "Downstairs", "Dozed", "Drainpipe", "Dresser", "Driftwood", "Droppings", "Drum", "Dryer", "Dubiously", "Duckling", "Duffel", "Dugout", "Dumpster", "Duplex", "Durable", "Dustpan", "Dutiful", "Duvet", "Dwarfism", "Dwelling", "Dwindling", "Dynamite", "Dyslexia", "Eagerness", "Earlobe", "Easel", "Eavesdrop", "Ebook", "Eccentric", "Echoless", "Eclipse", "Ecosystem", "Ecstasy", "Edged", "Editor", "Educator", "Eelworm", "Eerie", "Effects", "Eggnog", "Egomaniac", "Ejection", "Elastic", "Elbow", "Elderly", "Elephant", "Elfishly", "Eliminator", "Elk", "Elliptical", "Elongated", "Elsewhere", "Elusive", "Elves", "Emancipate", "Embroidery", "Emcee", "Emerald", "Emission", "Emoticon", "Emperor", "Emulate", "Enactment", "Enchilada", "Endorphin", "Energy", "Enforcer", "Engine", "Enhance", "Enigmatic", "Enjoyably", "Enlarged", "Enormous", "Enquirer", "Enrollment", "Ensemble", "Entryway", "Enunciate", "Envoy", "Enzyme", "Epidemic", "Equipment", "Erasable", "Ergonomic", "Erratic", "Eruption", "Escalator", "Eskimo", "Esophagus", "Espresso", "Essay", "Estrogen", "Etching", "Eternal", "Ethics", "Etiquette", "Eucalyptus", "Eulogy", "Euphemism", "Euthanize", "Evacuation", "Evergreen", "Evidence", "Evolution", "Exam", "Excerpt", "Exerciser", "Exfoliate", "Exhale", "Exist", "Exorcist", "Explode", "Exquisite", "Exterior", "Exuberant", "Fabric", "Factory", "Faded", "Failsafe", "Falcon", "Family", "Fanfare", "Fasten", "Faucet", "Favorite", "Feasibly", "February", "Federal", "Feedback", "Feigned", "Feline", "Femur", "Fence", "Ferret", "Festival", "Fettuccine", "Feudalist", "Feverish", "Fiberglass", "Fictitious", "Fiddle", "Figurine", "Fillet", "Finalist", "Fiscally", "Fixture", "Flashlight", "Fleshiness", "Flight", "Florist", "Flypaper", "Foamless", "Focus", "Foggy", "Folksong", "Fondue", "Footpath", "Fossil", "Fountain", "Fox", "Fragment", "Freeway", "Fridge", "Frosting", "Fruit", "Fryingpan", "Gadget", "Gainfully", "Gallstone", "Gamekeeper", "Gangway", "Garlic", "Gaslight", "Gathering", "Gauntlet", "Gearbox", "Gecko", "Gem", "Generator", "Geographer", "Gerbil", "Gesture", "Getaway", "Geyser", "Ghoulishly", "Gibberish", "Giddiness", "Giftshop", "Gigabyte", "Gimmick", "Giraffe", "Giveaway", "Gizmo", "Glasses", "Gleeful", "Glisten", "Glove", "Glucose", "Glycerin", "Gnarly", "Gnomish", "Goatskin", "Goggles", "Goldfish", "Gong", "Gooey", "Gorgeous", "Gosling", "Gothic", "Gourmet", "Governor", "Grape", "Greyhound", "Grill", "Groundhog", "Grumbling", "Guacamole", "Guerrilla", "Guitar", "Gullible", "Gumdrop", "Gurgling", "Gusto", "Gutless", "Gymnast", "Gynecology", "Gyration", "Habitat", "Hacking", "Haggard", "Haiku", "Halogen", "Hamburger", "Handgun", "Happiness", "Hardhat", "Hastily", "Hatchling", "Haughty", "Hazelnut", "Headband", "Hedgehog", "Hefty", "Heinously", "Helmet", "Hemoglobin", "Henceforth", "Herbs", "Hesitation", "Hexagon", "Hubcap", "Huddling", "Huff", "Hugeness", "Hullabaloo", "Human", "Hunter", "Hurricane", "Hushing", "Hyacinth", "Hybrid", "Hydrant", "Hygienist", "Hypnotist", "Ibuprofen", "Icepack", "Icing", "Iconic", "Identical", "Idiocy", "Idly", "Igloo", "Ignition", "Iguana", "Illuminate", "Imaging", "Imbecile", "Imitator", "Immigrant", "Imprint", "Iodine", "Ionosphere", "Ipad", "Iphone", "Iridescent", "Irksome", "Iron", "Irrigation", "Island", "Isotope", "Issueless", "Italicize", "Itemizer", "Itinerary", "Itunes", "Ivory", "Jabbering", "Jackrabbit", "Jaguar", "Jailhouse", "Jalapeno", "Jamboree", "Janitor", "Jarring", "Jasmine", "Jaundice", "Jawbreaker", "Jaywalker", "Jazz", "Jealous", "Jeep", "Jelly", "Jeopardize", "Jersey", "Jetski", "Jezebel", "Jiffy", "Jigsaw", "Jingling", "Jobholder", "Jockstrap", "Jogging", "John", "Joinable", "Jokingly", "Journal", "Jovial", "Joystick", "Jubilant", "Judiciary", "Juggle", "Juice", "Jujitsu", "Jukebox", "Jumpiness", "Junkyard", "Juror", "Justifying", "Juvenile", "Kabob", "Kamikaze", "Kangaroo", "Karate", "Kayak", "Keepsake", "Kennel", "Kerosene", "Ketchup", "Khaki", "Kickstand", "Kilogram", "Kimono", "Kingdom", "Kiosk", "Kissing", "Kite", "Kleenex", "Knapsack", "Kneecap", "Knickers", "Koala", "Krypton", "Laboratory", "Ladder", "Lakefront", "Lantern", "Laptop", "Laryngitis", "Lasagna", "Latch", "Laundry", "Lavender", "Laxative", "Lazybones", "Lecturer", "Leftover", "Leggings", "Leisure", "Lemon", "Length", "Leopard", "Leprechaun", "Lettuce", "Leukemia", "Levers", "Lewdness", "Liability", "Library", "Licorice", "Lifeboat", "Lightbulb", "Likewise", "Lilac", "Limousine", "Lint", "Lioness", "Lipstick", "Liquid", "Listless", "Litter", "Liverwurst", "Lizard", "Llama", "Luau", "Lubricant", "Lucidity", "Ludicrous", "Luggage", "Lukewarm", "Lullaby", "Lumberjack", "Lunchbox", "Luridness", "Luscious", "Luxurious", "Lyrics", "Macaroni", "Maestro", "Magazine", "Mahogany", "Maimed", "Majority", "Makeover", "Malformed", "Mammal", "Mango", "Mapmaker", "Marbles", "Massager", "Matchstick", "Maverick", "Maximum", "Mayonnaise", "Moaning", "Mobilize", "Moccasin", "Modify", "Moisture", "Molecule", "Momentum", "Monastery", "Moonshine", "Mortuary", "Mosquito", "Motorcycle", "Mousetrap", "Movie", "Mower", "Mozzarella", "Muckiness", "Mudflow", "Mugshot", "Mule", "Mummy", "Mundane", "Muppet", "Mural", "Mustard", "Mutation", "Myriad", "Myspace", "Myth", "Nail", "Namesake", "Nanosecond", "Napkin", "Narrator", "Nastiness", "Natives", "Nautically", "Navigate", "Nearest", "Nebula", "Nectar", "Nefarious", "Negotiator", "Neither", "Nemesis", "Neoliberal", "Nephew", "Nervously", "Nest", "Netting", "Neuron", "Nevermore", "Nextdoor", "Nicotine", "Niece", "Nimbleness", "Nintendo", "Nirvana", "Nuclear", "Nugget", "Nuisance", "Nullify", "Numbing", "Nuptials", "Nursery", "Nutcracker", "Nylon", "Oasis", "Oat", "Obediently", "Obituary", "Object", "Obliterate", "Obnoxious", "Observer", "Obtain", "Obvious", "Occupation", "Oceanic", "Octopus", "Ocular", "Office", "Oftentimes", "Oiliness", "Ointment", "Older", "Olympics", "Omissible", "Omnivorous", "Oncoming", "Onion", "Onlooker", "Onstage", "Onward", "Onyx", "Oomph", "Opaquely", "Opera", "Opium", "Opossum", "Opponent", "Optical", "Opulently", "Oscillator", "Osmosis", "Ostrich", "Otherwise", "Ought", "Outhouse", "Ovation", "Oven", "Owlish", "Oxford", "Oxidize", "Oxygen", "Oyster", "Ozone", "Pacemaker", "Padlock", "Pageant", "Pajamas", "Palm", "Pamphlet", "Pantyhose", "Paprika", "Parakeet", "Passport", "Patio", "Pauper", "Pavement", "Payphone", "Pebble", "Peculiarly", "Pedometer", "Pegboard", "Pelican", "Penguin", "Peony", "Pepperoni", "Peroxide", "Pesticide", "Petroleum", "Pewter", "Pharmacy", "Pheasant", "Phonebook", "Phrasing", "Physician", "Plank", "Pledge", "Plotted", "Plug", "Plywood", "Pneumonia", "Podiatrist", "Poetic", "Pogo", "Poison", "Poking", "Policeman", "Poncho", "Popcorn", "Porcupine", "Postcard", "Poultry", "Powerboat", "Prairie", "Pretzel", "Princess", "Propeller", "Prune", "Pry", "Pseudo", "Psychopath", "Publisher", "Pucker", "Pueblo", "Pulley", "Pumpkin", "Punchbowl", "Puppy", "Purse", "Pushup", "Putt", "Puzzle", "Pyramid", "Python", "Quarters", "Quesadilla", "Quilt", "Quote", "Racoon", "Radish", "Ragweed", "Railroad", "Rampantly", "Rancidity", "Rarity", "Raspberry", "Ravishing", "Rearrange", "Rebuilt", "Receipt", "Reentry", "Refinery", "Register", "Rehydrate", "Reimburse", "Rejoicing", "Rekindle", "Relic", "Remote", "Renovator", "Reopen", "Reporter", "Request", "Rerun", "Reservoir", "Retriever", "Reunion", "Revolver", "Rewrite", "Rhapsody", "Rhetoric", "Rhino", "Rhubarb", "Rhyme", "Ribbon", "Riches", "Ridden", "Rigidness", "Rimmed", "Riptide", "Riskily", "Ritzy", "Riverboat", "Roamer", "Robe", "Rocket", "Romancer", "Ropelike", "Rotisserie", "Roundtable", "Royal", "Rubber", "Rudderless", "Rugby", "Ruined", "Rulebook", "Rummage", "Running", "Rupture", "Rustproof", "Sabotage", "Sacrifice", "Saddlebag", "Saffron", "Sainthood", "Saltshaker", "Samurai", "Sandworm", "Sapphire", "Sardine", "Sassy", "Satchel", "Sauna", "Savage", "Saxophone", "Scarf", "Scenario", "Schoolbook", "Scientist", "Scooter", "Scrapbook", "Sculpture", "Scythe", "Secretary", "Sedative", "Segregator", "Seismology", "Selected", "Semicolon", "Senator", "Septum", "Sequence", "Serpent", "Sesame", "Settler", "Severely", "Shack", "Shelf", "Shirt", "Shovel", "Shrimp", "Shuttle", "Shyness", "Siamese", "Sibling", "Siesta", "Silicon", "Simmering", "Singles", "Sisterhood", "Sitcom", "Sixfold", "Sizable", "Skateboard", "Skeleton", "Skies", "Skulk", "Skylight", "Slapping", "Sled", "Slingshot", "Sloth", "Slumbering", "Smartphone", "Smelliness", "Smitten", "Smokestack", "Smudge", "Snapshot", "Sneezing", "Sniff", "Snowsuit", "Snugness", "Speakers", "Sphinx", "Spider", "Splashing", "Sponge", "Sprout", "Spur", "Spyglass", "Squirrel", "Statue", "Steamboat", "Stingray", "Stopwatch", "Strawberry", "Student", "Stylus", "Suave", "Subway", "Suction", "Suds", "Suffocate", "Sugar", "Suitcase", "Sulphur", "Superstore", "Surfer", "Sushi", "Swan", "Sweatshirt", "Swimwear", "Sword", "Sycamore", "Syllable", "Symphony", "Synagogue", "Syringes", "Systemize", "Tablespoon", "Taco", "Tadpole", "Taekwondo", "Tagalong", "Takeout", "Tallness", "Tamale", "Tanned", "Tapestry", "Tarantula", "Tastebud", "Tattoo", "Tavern", "Thaw", "Theater", "Thimble", "Thorn", "Throat", "Thumb", "Thwarting", "Tiara", "Tidbit", "Tiebreaker", "Tiger", "Timid", "Tinsel", "Tiptoeing", "Tirade", "Tissue", "Tractor", "Tree", "Tripod", "Trousers", "Trucks", "Tryout", "Tubeless", "Tuesday", "Tugboat", "Tulip", "Tumbleweed", "Tupperware", "Turtle", "Tusk", "Tutorial", "Tuxedo", "Tweezers", "Twins", "Tyrannical", "Ultrasound", "Umbrella", "Umpire", "Unarmored", "Unbuttoned", "Uncle", "Underwear", "Unevenness", "Unflavored", "Ungloved", "Unhinge", "Unicycle", "Unjustly", "Unknown", "Unlocking", "Unmarked", "Unnoticed", "Unopened", "Unpaved", "Unquenched", "Unroll", "Unscrewing", "Untied", "Unusual", "Unveiled", "Unwrinkled", "Unyielding", "Unzip", "Upbeat", "Upcountry", "Update", "Upfront", "Upgrade", "Upholstery", "Upkeep", "Upload", "Uppercut", "Upright", "Upstairs", "Uptown", "Upwind", "Uranium", "Urban", "Urchin", "Urethane", "Urgent", "Urologist", "Username", "Usher", "Utensil", "Utility", "Utmost", "Utopia", "Utterance", "Vacuum", "Vagrancy", "Valuables", "Vanquished", "Vaporizer", "Varied", "Vaseline", "Vegetable", "Vehicle", "Velcro", "Vendor", "Vertebrae", "Vestibule", "Veteran", "Vexingly", "Vicinity", "Videogame", "Viewfinder", "Vigilante", "Village", "Vinegar", "Violin", "Viperfish", "Virus", "Visor", "Vitamins", "Vivacious", "Vixen", "Vocalist", "Vogue", "Voicemail", "Volleyball", "Voucher", "Voyage", "Vulnerable", "Waffle", "Wagon", "Wakeup", "Walrus", "Wanderer", "Wasp", "Water", "Waving", "Wheat", "Whisper", "Wholesaler", "Wick", "Widow", "Wielder", "Wifeless", "Wikipedia", "Wildcat", "Windmill", "Wipeout", "Wired", "Wishbone", "Wizardry", "Wobbliness", "Wolverine", "Womb", "Woolworker", "Workbasket", "Wound", "Wrangle", "Wreckage", "Wristwatch", "Wrongdoing", "Xerox", "Xylophone", "Yacht", "Yahoo", "Yard", "Yearbook", "Yesterday", "Yiddish", "Yield", "Yo-yo", "Yodel", "Yogurt", "Yuppie", "Zealot", "Zebra", "Zeppelin", "Zestfully", "Zigzagged", "Zillion", "Zipping", "Zirconium", "Zodiac", "Zombie", "Zookeeper", "Zucchini",
]

export default effWordlist;

var notebooks = angular.module('notebooks', []);

notebooks.controller('NotebookListCtrl', function($scope) {
  $scope.notebooks = [
    {"name": "Valerie",
     "procesor": "Amy Winehouse",
     "age": 2011},
    {"name": "Come Together",
     "procesor": "The Beatles",
     "age": 2010},
    {"name": "This Love",
     "procesor": "Maroon 5",
     "age": 2008},
    {"name": "Zombie",
     "procesor": "The Cranberries",
     "age": 2012},
    {"name": "What's Up",
     "procesor": "4 Non Blondes",
     "age": 2006},
    {"name": "Ain’t No Mountain High Enough",
     "procesor": "Marvin Gaye",
     "age": 2009},
    {"name": "Ain't No Sunshine",
     "procesor": "Bill Withers",
     "age": 2008},
    {"name": "Rolling in the Deep",
     "procesor": "Adele",
     "age": 2011},
    {"name": "Rehab",
     "procesor": "Amy Winehouse",
     "age": 2010},
    {"name": "Give Me One Reason",
     "procesor": "Tracy Chapman",
     "age": 2008},
    {"name": "I Wanna Dance with Somebody",
     "procesor": " Whitney Houston",
     "age": 2012},
    {"name": "Dreams",
     "procesor": "Fleetwood Mac",
     "age": 2006},
    {"name": "At Last",
     "procesor": "Etta James",
     "age": 2009},
    {"name": "September",
     "procesor": "Earth Wind & Fire",
     "age": 2008},
    {"name": "Heaven",
     "procesor": "Los Lonely Boys",
     "age": 2011},
    {"name": "Seven Nation Army",
     "procesor": "The White Stripes",
     "age": 2010},
    {"name": "Como la Flor",
     "procesor": "Selena y Los Dinos",
     "age": 2008},
    {"name": "Bidi Bidi Bom Bom",
     "procesor": "Selena",
     "age": 2012},
    {"name": "Baila Esta Cumbia",
     "procesor": "Selena",
     "age": 2006},
    {"name": "Por un Amor",
     "procesor": "Linda Ronstadt",
     "age": 2009},
    {"name": "Los Laureles",
     "procesor": "Linda Ronstad",
     "age": 2008},
     {"name": "Volver, Volver",
     "procesor": "Vicente Fernández",
     "age": 2008},
     {"name": "Boogie Oogie Oogie",
     "procesor": "A Taste of Honey",
     "age": 2008},
     {"name": "I'm the Only One",
     "procesor": "Melissa Etheridge",
     "age": 2008},
     {"name": "Hotel California",
     "procesor": "Eagles",
     "age": 2008},
     {"name": "What I Got",
     "procesor": "Sublime",
     "age": 2008},
     {"name": "Redbone",
     "procesor": "Donald Glover",
     "age": 2008},
     {"name": "Pony",
     "procesor": "Ginuwine",
     "age": 2008},
     {"name": "Hand in my pocket",
     "procesor": "Alanis Morissette",
     "age": 2008},
     {"name": "Ironic",
     "procesor": "Alanis Morissette",
     "age": 2008},
     {"name": "Love on the Brain",
     "procesor": "Rihanna",
     "age": 2008},
     {"name": "Rhiannon",
     "procesor": "Fleetwood Mac",
     "age": 2008},
     {"name": "If I Ain't Got You",
     "procesor": "Alicia Keys",
     "age": 2008},
     {"name": "Superstition",
     "procesor": "Stevie Wonder",
     "age": 2008},
     {"name": "Bennie And The Jets",
     "procesor": "Elton John",
     "age": 2008},
     {"name": "Billie Jean",
     "procesor": "Michael Jackson",
     "age": 2008},
     {"name": "Unwritten",
     "procesor": "Natasha Bedingfield",
     "age": 2008},
     {"name": "Don't Go Breaking My Heart",
     "procesor": "Elton John and Kiki Dee",
     "age": 2008},
     {"name": "Don't Know Why",
     "procesor": "Norah Jones",
     "age": 2008},
     {"name": "Before He Cheats",
     "procesor": "Carrie Underwood",
     "age": 2008},
     {"name": "Redneck Woman",
     "procesor": "Gretchen Wilson",
     "age": 2008},
     {"name": "Sex on Fire",
     "procesor": "Kings Of Leon",
     "age": 2008},
     {"name": "I Will Survive",
     "procesor": "Gloria Gaynor",
     "age": 2008},
     {"name": "Crazy",
     "procesor": "Gnarls Barkley",
     "age": 2008},
     {"name": "I Feel It Coming",
     "procesor": "The Weeknd",
     "age": 2008},
     {"name": "What a Fool Believes",
     "procesor": "The Doobie Brothers",
     "age": 2008},
     {"name": "She's In Love With The Boy",
     "procesor": "Trisha Yearwood",
     "age": 2008},
     {"name": "9 to 5",
     "procesor": "Dolly Parton",
     "age": 2008},


     {"name": "1979",
     "procesor": "Smashing Pumpkins",
     "age": 2008},
     {"name": "3AM",
     "procesor": "Matchbox 20",
     "age": 2008},
     {"name": "5 O'Clock Somewhere",
     "procesor": "Alan Jackson",
     "age": 2008},
     {"name": "All Apologies",
     "procesor": "Nirvana",
     "age": 2008},
     {"name": "All Of Me",
     "procesor": "John Legend",
     "age": 2008},
     {"name": "Amarillo By Morning",
     "procesor": "George Strait",
     "age": 2008},
     {"name": "American Pie",
     "procesor": "Don McLean",
     "age": 2008},
     {"name": "Angel",
     "procesor": "Shaggy",
     "age": 2008},
     {"name": "Austin",
     "procesor": "Blake Shelton",
     "age": 2008},
     {"name": "Baby Blue",
     "procesor": "George Strait",
     "age": 2008},
     {"name": "Baby I Love Your Way",
     "procesor": "Peter Frampton",
     "age": 2008},
     {"name": "Badfish",
     "procesor": "Sublime",
     "age": 2008},
     {"name": "Badfish",
     "procesor": "Sublime",
     "age": 2008},
     {"name": "Better Man",
     "procesor": "Pearl Jam",
     "age": 2008},
     {"name": "Bittersweet Symphony",
     "procesor": "The Verve",
     "age": 2008},
     {"name": "Blister in the Sun",
     "procesor": "Violent Femmes",
     "age": 2008},
     {"name": "Brown Eyed Girl",
     "procesor": "Van Morrison",
     "age": 2008},
     {"name": "Buckets of Rain",
     "procesor": "Bob Dylan",
     "age": 2008},
     {"name": "Californiacation",
     "procesor": "Red Hot Chili Peppers",
     "age": 2008},
     {"name": "Careless Whisper",
     "procesor": "George Michael",
     "age": 2008},
     {"name": "The Chair",
     "procesor": "George Strait",
     "age": 2008},
     {"name": "Closing Time",
     "procesor": "Semisonic",
     "age": 2008},
     {"name": "Come And Get Your Love",
     "procesor": "Redbone",
     "age": 2008},
     {"name": "Come on Eileen",
     "procesor": "Dexy and the Midnight Runners",
     "age": 2008},
     {"name": "Country Roads",
     "procesor": "John Denver",
     "age": 2008},
     {"name": "Creep",
     "procesor": "Radiohead",
     "age": 2008},
     {"name": "Dani California",
     "procesor": "Red Hot Chili Peppers",
     "age": 2008},
     {"name": "Don't Dream It's Over",
     "procesor": "Crowded House",
     "age": 2008},
     {"name": "Don't Stop Believing",
     "procesor": "Journey",
     "age": 2008},
     {"name": "Drift Away",
     "procesor": "Dobie Gray",
     "age": 2008},
     {"name": "Drinkin' Problem",
     "procesor": "Midland",
     "age": 2008},
     {"name": "Drive",
     "procesor": "Incubus",
     "age": 2008},
     {"name": "Drops of Jupiter",
     "procesor": "Train",
     "age": 2008},
     {"name": "Easy",
     "procesor": "The Commodores",
     "age": 2008},
     {"name": "Feel Good Inc.",
     "procesor": "Gorillaz",
     "age": 2008},
     {"name": "First Cut is the Deepest",
     "procesor": "Cat Stevens",
     "age": 2008},
     {"name": "Fly Me to the Moon",
     "procesor": "Frank Sinatra",
     "age": 2008},
     {"name": "Folsom Prison Blues",
     "procesor": "Johnny Cash",
     "age": 2008},
     {"name": "Freebird",
     "procesor": "Lynrd Skynrd ($100 ;))",
     "age": 2008},
     {"name": "Friends in Low Places",
     "procesor": "Garth Brooks",
     "age": 2008},
     {"name": "Gravity",
     "procesor": "John Mayer",
     "age": 2008},
     {"name": "Gypsy",
     "procesor": "Fleetwood Mac",
     "age": 2008},
     {"name": "Halleluiah",
     "procesor": "Jeff Buckley",
     "age": 2008},
     {"name": "Have You Ever Seen The Rain",
     "procesor": "CCR",
     "age": 2008},
     {"name": "Head Over Boots",
     "procesor": "John Pardi",
     "age": 2008},
     {"name": "Hey Jude",
     "procesor": "The Beatles",
     "age": 2008},
     {"name": "High and Dry",
     "procesor": "Radiohead",
     "age": 2008},
     {"name": "How Deep is Your Love",
     "procesor": "The Bee Gees",
     "age": 2008},
     {"name": "Human Nature",
     "procesor": "Michael Jackson",
     "age": 2008},
     {"name": "I Just Called to Say I Love You",
     "procesor": "Stevie Wonder",
     "age": 2008},
     {"name": "I Just Wanna Fly",
     "procesor": "Sugar Ray",
     "age": 2008},
     {"name": "I Just Want To Dance With You",
     "procesor": "George Strait",
     "age": 2008},
     {"name": "I'm On Fire",
     "procesor": "Bruce Springsteen",
     "age": 2008},
     {"name": "Iris",
     "procesor": "Goo Goo Dolls",
     "age": 2008},
     {"name": "It's Your Love",
     "procesor": "Tim McGraw",
     "age": 2008},
     {"name": "Jolene",
     "procesor": "Dolly Parton",
     "age": 2008},
     {"name": "Just Like Heaven",
     "procesor": "The Cure",
     "age": 2008},
     {"name": "Just the Two Of Us",
     "procesor": "Bill Whithers",
     "age": 2008},
     {"name": "Kiss Me",
     "procesor": "Sixpence Non the Richter",
     "age": 2008},
     {"name": "Landslide",
     "procesor": "Stevie Nicks",
     "age": 2008},
     {"name": "Last Night",
     "procesor": "The Strokes",
     "age": 2008},
     {"name": "Lean On Me",
     "procesor": "Bill Whithers",
     "age": 2008},
     {"name": "Learning to Fly",
     "procesor": "Tom Petty",
     "age": 2008},
     {"name": "Little Red Corvette",
     "procesor": "Prince",
     "age": 2008},
     {"name": "Make Me Wanna",
     "procesor": "Thomas Rhett",
     "age": 2008},
     {"name": "Margaritaville",
     "procesor": "Jimmy Buffett",
     "age": 2008},
     {"name": "Mary Jane's Last Dance",
     "procesor": "Tom Petty",
     "age": 2008},
     {"name": "Money",
     "procesor": "Pink Floyd",
     "age": 2008},
     {"name": "More Than Words",
     "procesor": "Extreme",
     "age": 2008},
     {"name": "Mr. Brightside",
     "procesor": "The Killers",
     "age": 2008},
     {"name": "My Hero",
     "procesor": "Foo Fighters",
     "age": 2008},
     {"name": "My Own Worst Enemy",
     "procesor": "Lit",
     "age": 2008},
     {"name": "Neon Moon",
     "procesor": "Brooks and Dunn",
     "age": 2008},
     {"name": "One Of These Nights",
     "procesor": "The Eagles",
     "age": 2008},
     {"name": "Operator",
     "procesor": "Jim Croce",
     "age": 2008},
     {"name": "Piano Man",
     "procesor": "Billy Joel",
     "age": 2008},
     {"name": "Plush",
     "procesor": "Stone Temple Pilots",
     "age": 2008},
     {"name": "Pride and Joy",
     "procesor": "Stevie Ray Vaughan",
     "age": 2008},
     {"name": "The Promise",
     "procesor": "When in Rome",
     "age": 2008},
     {"name": "Purple Rain",
     "procesor": "Prince",
     "age": 2008},
     {"name": "Push",
     "procesor": "Matchbox 20",
     "age": 2008},
     {"name": "Put Your Head on My Shoulders",
     "procesor": "Paul Anka",
     "age": 2008},
     {"name": "Rich Girl",
     "procesor": "Hall and Oates",
     "age": 2008},
     {"name": "Rocket Man",
     "procesor": "Elton John",
     "age": 2008},
     {"name": "Rock With You",
     "procesor": "Michael Jackson",
     "age": 2008},
     {"name": "Sara Smile",
     "procesor": "Hall and Oates",
     "age": 2008},
     {"name": "Say It Ain't So",
     "procesor": "Weezer",
     "age": 2008},
     {"name": "Scar Tissue",
     "procesor": "Red Hot Chili Peppers",
     "age": 2008},
     {"name": "Simple Man",
     "procesor": "Lynrd Syknrd",
     "age": 2008},
     {"name": "Sittin on The Dock Of The Bay",
     "procesor": "Ottis Redding",
     "age": 2008},
     {"name": "Slow Dancing In A Burning Room",
     "procesor": "John Mayer",
     "age": 2008},
     {"name": "Something",
     "procesor": "The Beatles",
     "age": 2008},
     {"name": "Space Oddity",
     "procesor": "David Bowie",
     "age": 2008},
     {"name": "Stand By Me",
     "procesor": "Ben E. King",
     "age": 2008},
     {"name": "Start Me Up",
     "procesor": "Rolling Stones",
     "age": 2008},
     {"name": "Stop This Train",
     "procesor": "John Mayer",
     "age": 2008},
     {"name": "Strawberry Wine",
     "procesor": "Deana Carter",
     "age": 2008},
     {"name": "Suit and Tie",
     "procesor": "Justin Timberlake",
     "age": 2008},
     {"name": "Sweet Caroline",
     "procesor": "Neil Diamond",
     "age": 2008},
     {"name": "Sweet Home Alabama",
     "procesor": "Lynrd Skynrd",
     "age": 2008},
     {"name": "Take Me Out",
     "procesor": "Franz Ferdinand",
     "age": 2008},
     {"name": "Take On Me",
     "procesor": "Ah Ha",
     "age": 2008},
     {"name": "Tears In Heaven",
     "procesor": "Eric Clapton",
     "age": 2008},
     {"name": "Tennessee Whiskey",
     "procesor": "Chris Stapleton",
     "age": 2008},
     {"name": "Time Of Your Life",
     "procesor": "Green Day",
     "age": 2008},
     {"name": "Toxic",
     "procesor": "Brittney Spears",
     "age": 2008},
     {"name": "Turn The Page",
     "procesor": "Bob Segar",
     "age": 2008},
     {"name": "Wagon Wheel",
     "procesor": "Darius Rucker",
     "age": 2008},
     {"name": "Waiting on the World to Change",
     "procesor": "John Mayer",
     "age": 2008},
     {"name": "Wasn't Me",
     "procesor": "Shaggy",
     "age": 2008},
     {"name": "The Way You Make Me Feel ",
     "procesor": "Michael Jackson",
     "age": 2008},
     {"name": "Wild World",
     "procesor": "Cat Stevens",
     "age": 2008},
     {"name": "With Or Without You",
     "procesor": "U2",
     "age": 2008},
     {"name": "Wonderwall",
     "procesor": "Oasis",
     "age": 2008},
     {"name": "You Can't Always Get What You Want",
     "procesor": "The Rolling Stones",
     "age": 2008},
     {"name": "Best Part",
     "procesor": "Daniel Ceasar",
     "age": 2008},
     {"name": "Adore You",
     "procesor": "Harry Styles",
     "age": 2008},
     {"name": "As It Was",
     "procesor": "Harry Styles",
     "age": 2008},
     {"name": "I Feel It Coming",
     "procesor": "The Weeknd",
     "age": 2008},
     {"name": "Save Your Tears",
     "procesor": "The Weeknd",
     "age": 2008},
     {"name": "Forever and Ever Amen",
     "procesor": "Randy Travis",
     "age": 2008},
     {"name": "Yellow",
     "procesor": "Coldplay",
     "age": 2008},
     {"name": "Crazy Little Thing Called Love",
     "procesor": "Queen",
     "age": 2008},
     {"name": "No Such Thing",
     "procesor": "John Mayer",
     "age": 2008},
     {"name": "I'm Yours",
     "procesor": "Jason Mraz",
     "age": 2008},
     {"name": "Killing Me Softly",
     "procesor": "Fugees",
     "age": 2008},
     {"name": "Any Man Of Mine",
     "procesor": "Shania Twain",
     "age": 2008},
     {"name": "Bannana Pancakes",
     "procesor": "Jack Johnson",
     "age": 2008},
     {"name": "Beautiful",
     "procesor": "Christina Aguilera",
     "age": 2008},
     {"name": "Can't Get You Out Of My Head",
     "procesor": "Kylie Minogue",
     "age": 2008},
     {"name": "Chicken Fried",
     "procesor": "Zac Brown Band",
     "age": 2008},
     {"name": "Crocodile Rock",
     "procesor": "Elton John",
     "age": 2008},
     {"name": "Dancing Queen",
     "procesor": "ABBA",
     "age": 2008},
     {"name": "Desperado",
     "procesor": "The Eagles",
     "age": 2008},
     {"name": "Don't Go Chasing Waterfalls",
     "procesor": "TLC",
     "age": 2008},
     {"name": "Scrubs",
     "procesor": "TLC",
     "age": 2008},
     {"name": "Killing Me Softly",
     "procesor": "Fugees",
     "age": 2008},
     {"name": "Don't Start Now",
     "procesor": "Dua Lipa",
     "age": 2008},
     {"name": "Dust In The Wind",
     "procesor": "Kansas",
     "age": 2008},
     {"name": "Free Fallin'",
     "procesor": "Tom Petty",
     "age": 2008},
     {"name": "Friday",
     "procesor": "The Cure",
     "age": 2008},
     {"name": "In My Arms Instead",
     "procesor": "Randy Rodgers Band",
     "age": 2008},
     {"name": "Island In The Sun",
     "procesor": "Weezer",
     "age": 2008},
     {"name": "Kiss From A Rose",
     "procesor": "Seal",
     "age": 2008},
     {"name": "Three Little Birds",
     "procesor": "Bob Marley",
     "age": 2008},
     {"name": "Late Night Talking",
     "procesor": "Harry Styles",
     "age": 2008},
     {"name": "One More Time",
     "procesor": "Brittney Spears",
     "age": 2008},
     {"name": "Toxic",
     "procesor": "Brittney Spears",
     "age": 2008},
     {"name": "What You Won't Do For Love",
     "procesor": "Bobby Caldwell",
     "age": 2008},
     {"name": "Interstate Love Song",
     "procesor": "Stone Temple Pilots",
     "age": 2008},
     {"name": "Before He Cheats",
     "procesor": "Carrie Underwood",
     "age": 2008},
     {"name": "Let Me Love You",
     "procesor": "Mario",
     "age": 2008},
     







     

  ];
  $scope.orderList = "name";
});
var toonImg = ["http://images.thehive-services.com/looneyToonsApi/porky.jpg", "http://images.thehive-services.com/looneyToonsApi/marvin.jpg", "http://images.thehive-services.com/looneyToonsApi/tweety.png", "http://images.thehive-services.com/looneyToonsApi/foghorn.jpg", "http://images.thehive-services.com/looneyToonsApi/elmer.jpg", "http://images.thehive-services.com/looneyToonsApi/sylvester.jpg", "http://images.thehive-services.com/looneyToonsApi/yosemite.jpeg", "http://images.thehive-services.com/looneyToonsApi/taz.jpg", "http://images.thehive-services.com/looneyToonsApi/pepe.jpg", "http://images.thehive-services.com/looneyToonsApi/speedy.jpg", "http://images.thehive-services.com/looneyToonsApi/granny.png", "http://images.thehive-services.com/looneyToonsApi/witchHazel.jpg", "http://images.thehive-services.com/looneyToonsApi/heneryHawk.jpg", "https://images.thehive-services.com/looneyToonsApi/bugs.jpeg", "https://images.thehive-services.com/looneyToonsApi/daffy.jpg", "http://images.thehive-services.com/looneyToonsApi/michiganFrog.png", "http://images.thehive-services.com/looneyToonsApi/cecil.png", "http://images.thehive-services.com/looneyToonsApi/roadRunner.png"]

var toonName = ["Porky Pig", "Marvin the Martian", "Tweey", "Foghorn Leghorn", "Elmer Fudd", "Sylvester", "Yosemite Sam", "Tasmanian Devil", "Pepe Le Pew", "Speedy Gonzales", "Granny", "Witch Hazel", "Henery Hawk", "Bugs Bunny", "Daffy Duck", "Michigan J. Frog", "Cecil Turtle", "Road Runner"]

var someToons01 = ["Porky Pig", "Marvin the Martian", "Tweey", "Foghorn Leghorn", "Elmer Fudd", "Sylvester", "Yosemite Sam", "Tasmanian Devil", "Pepe Le Pew"]

var someToons02 = ["http://images.thehive-services.com/looneyToonsApi/porky.jpg", "http://images.thehive-services.com/looneyToonsApi/marvin.jpg", "http://images.thehive-services.com/looneyToonsApi/tweety.png", "http://images.thehive-services.com/looneyToonsApi/foghorn.jpg", "http://images.thehive-services.com/looneyToonsApi/elmer.jpg", "http://images.thehive-services.com/looneyToonsApi/sylvester.jpg", "http://images.thehive-services.com/looneyToonsApi/yosemite.jpeg", "http://images.thehive-services.com/looneyToonsApi/taz.jpg", "http://images.thehive-services.com/looneyToonsApi/pepe.jpg"]

var someToons03 = ["Speedy Gonzales", "Granny", "Witch Hazel", "Henery Hawk", "Bugs Bunny", "Daffy Duck", "Michigan J. Frog", "Cecil Turtle", "Road Runner"]

var someToons04 = ["http://images.thehive-services.com/looneyToonsApi/speedy.jpg", "http://images.thehive-services.com/looneyToonsApi/granny.png", "http://images.thehive-services.com/looneyToonsApi/witchHazel.jpg", "http://images.thehive-services.com/looneyToonsApi/heneryHawk.jpg", "https://images.thehive-services.com/looneyToonsApi/bugs.jpeg", "https://images.thehive-services.com/looneyToonsApi/daffy.jpg", "http://images.thehive-services.com/looneyToonsApi/michiganFrog.png", "http://images.thehive-services.com/looneyToonsApi/cecil.png", "http://images.thehive-services.com/looneyToonsApi/roadRunner.png"]

var toons = [{"id":5,"name":"Porky Pig","birthDay":"March 2, 1935","spouse":"Petunia Pig","voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/porky.jpg"},{"id":9,"name":"Marvin the Martian","birthDay":"July 24, 1948","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/marvin.jpg"},{"id":3,"name":"Tweey","birthDay":"November 22, 1941","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/tweety.png"},{"id":4,"name":"Foghorn Leghorn","birthDay":"August 31, 1946","spouse":"Miss Prissy","voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/foghorn.jpg"},{"id":6,"name":"Elmer Fudd","birthDay":"1940","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/elmer.jpg"},{"id":7,"name":"Sylvester","birthDay":"March 24, 1945","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/sylvester.jpg"},{"id":8,"name":"Yosemite Sam","birthDay":"May 5, 1945","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/yosemite.jpeg"},{"id":10,"name":"Tasmanian Devil","birthDay":"1954","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/taz.jpg"},{"id":11,"name":"Pepe Le Pew","birthDay":"1945","spouse":"Penelope Pussycat","voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/pepe.jpg"},{"id":12,"name":"Speedy Gonzales","birthDay":"1953","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/speedy.jpg"},{"id":13,"name":"Granny","birthDay":"November 6, 1937","spouse":null,"voice":"Bea Benaderet","img":"http://images.thehive-services.com/looneyToonsApi/granny.png"},{"id":14,"name":"Witch Hazel","birthDay":"1954","spouse":null,"voice":"Bea Benaderet","img":"http://images.thehive-services.com/looneyToonsApi/witchHazel.jpg"},{"id":15,"name":"Henery Hawk","birthDay":"1942","spouse":null,"voice":"Ben Falcone","img":"http://images.thehive-services.com/looneyToonsApi/heneryHawk.jpg"},{"id":1,"name":"Bugs Bunny","birthDay":"April 30, 1938","spouse":"Lola Bunny","voice":"Mel Blanc","img":"https://images.thehive-services.com/looneyToonsApi/bugs.jpeg"},{"id":2,"name":"Daffy Duck","birthDay":"April 17, 1937","spouse":"Melissa Duck","voice":"Mel Blanc","img":"https://images.thehive-services.com/looneyToonsApi/daffy.jpg"},{"id":16,"name":"Michigan J. Frog","birthDay":"December 31, 1955","spouse":null,"voice":"Bill Roberts","img":"http://images.thehive-services.com/looneyToonsApi/michiganFrog.png"},{"id":17,"name":"Cecil Turtle","birthDay":"March 15, 1941","spouse":null,"voice":"Jim Rash","img":"http://images.thehive-services.com/looneyToonsApi/cecil.png"},{"id":18,"name":"Road Runner","birthDay":"September 17, 1949","spouse":null,"voice":"Mel Blanc","img":"http://images.thehive-services.com/looneyToonsApi/roadRunner.png"}]

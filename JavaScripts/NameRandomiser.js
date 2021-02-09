var randomFromList = [
  "BlueTomato1337",
  "PinkApple2046",
  "AnnanasPizza5376",
  "PutinsBoner45",
  "HailAkaHusky76",
  "RiskNothing",
  "BadBody7746",
  "xXImyourloverXx",
  "YourMomHatesYou",
  "KarenIsDumb",
  "MadDogDoesntBite",
  "RubbleBubble",
  "ScarLovesYou",
  "TempestRunner445",
];
var randomiser = Math.floor(Math.random() * randomFromList.length);

document.getElementById("randomtext").placeholder = randomFromList[randomiser];

var randomFromList2 = [
  "BlueTomato1337@gmail.com",
  "PinkApple2046@gmail.com",
  "AnnanasPizza5376@gmail.com",
  "PutinsBoner45@gmail.com",
  "HailAkaHusky76@gmail.com",
  "RiskNothing@gmail.com",
  "BadBoy7746@gmail.com",
  "xXImyourloverXx@gmail.com",
  "YourMomHatesYou@gmail.com",
  "KarenIsDumb@gmail.com",
  "MadDogDoesntBite@gmail.com",
  "RubbleBubble@gmail.com",
  "ScarLovesYou@gmail.com",
  "TempestRunner445@gmail.com",
];
document.getElementById("randommail").placeholder = randomFromList2[randomiser];

var randomFromList3 = [
    'Sky, Rocket, Sun',
    'Dragon, Sky, Flight',
    'Pet, Grass, Husky, Sleep',
    'Knife, Rabbit, Food',
    'Magnet, Gravity, Pipe'
  ];
  var randomiser2 = Math.floor(Math.random() * randomFromList3.length);
  
  document.getElementById("randomtag").placeholder = randomFromList3[randomiser2];
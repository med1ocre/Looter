//Player object to store all player related vars..
let Player = {

  Level: 0,
  CurrentHealth: 100,
  TotalHealth: 100,

  //Minimum and maximum physical damage(starting damage type)
  MinPhysDmg: 4,
  MaxPhysDmg: 2,

  //Attack speed... the number represents in milliseoncds. so every x.. attack
  AttackSpeed: 1500,
  //This is out of 100 chance so for the example it is 75/100
  HitChance: 75,

  //Players exp, and total exp till level up
  Experience: 0,
  ExperienceToLvlUp: 100

}

let ActiveEnemy = {

  Level: 0,
  CurrentHealth: 0,
  TotalHealth: 0,
  MinExp: 0,
  MaxExp: 0,
  Name: ""

}

//Set our HTML elements to there variable so that we can access them in our js.
let Element = {

  //Tiles
  //The whole tile element
  MarketTile: document.getElementById("MarketTile"),
  //The tiles img, so we can access it to change to locked/unlocked
  MarketTileImg: document.getElementById("MarketTileImg"),
  //The tiles txt, so we can access it to change to locked/unlocked
  MarketTileTxt: document.getElementById("MarketTileTxt"),
  //The tiles txt, so we can access it to change to locked/unlocked
  MarketTileDesc: document.getElementById("MarketTileDesc"),
  //The tiles btn, so we can disable it with classes
  MarketTileBtn: document.getElementById("MarketTileBtn"),

  //The whole tile element
  ForgeTile: document.getElementById("ForgeTile"),
  //The tiles img, so we can access it to change to locked/unlocked
  ForgeTileImg: document.getElementById("ForgeTileImg"),
  //The tiles txt, so we can access it to change to locked/unlocked
  ForgeTileTxt: document.getElementById("ForgeTileTxt"),
  //The tiles txt, so we can access it to change to locked/unlocked
  ForgeTileDesc: document.getElementById("ForgeTileDesc"),
  //The tiles btn, so we can disable it with classes
  ForgeTileBtn: document.getElementById("ForgeTileBtn"),

  //The whole tile element
  FarmTile: document.getElementById("FarmTile"),
  //The tiles img, so we can access it to change to locked/unlocked
  FarmTileImg: document.getElementById("FarmTileImg"),
  //The tiles txt, so we can access it to change to locked/unlocked
  FarmTileTxt: document.getElementById("FarmTileTxt"),
  //The tiles txt, so we can access it to change to locked/unlocked
  FarmTileDesc: document.getElementById("FarmTileDesc"),
  //The tiles btn, so we can disable it with classes
  FarmTileBtn: document.getElementById("FarmTileBtn"),

  //The whole tile element
  BarnTile: document.getElementById("BarnTile"),
  //The tiles img, so we can access it to change to locked/unlocked
  BarnTileImg: document.getElementById("BarnTileImg"),
  //The tiles txt, so we can access it to change to locked/unlocked
  BarnTileTxt: document.getElementById("BarnTileTxt"),
  //The tiles txt, so we can access it to change to locked/unlocked
  BarnTileDesc: document.getElementById("BarnTileDesc"),
  //The tiles btn, so we can disable it with classes
  BarnTileBtn: document.getElementById("BarnTileBtn"),

  //The whole tile element
  LabTile: document.getElementById("LabTile"),
  //The tiles img, so we can access it to change to locked/unlocked
  LabTileImg: document.getElementById("LabTileImg"),
  //The tiles txt, so we can access it to change to locked/unlocked
  LabTileTxt: document.getElementById("LabTileTxt"),
  //The tiles txt, so we can access it to change to locked/unlocked
  LabTileDesc: document.getElementById("LabTileDesc"),
  //The tiles btn, so we can disable it with classes
  LabTileBtn: document.getElementById("LabTileBtn"),

  //enemies
  EnemyImg: document.getElementById("EnemyImg"),
  EnemyNameText: document.getElementById("EnemyNameText"),
  EnemyHealthBar: document.getElementById("EnemyHealthBar"),
  EnemyHealthBarText: document.getElementById("EnemyHealthBarText"),

  //Character stuff
  CharacterLvlTxt: document.getElementById("CharacterLvlTxt"),

  //Inventory
  P1S1: document.getElementById("p1s1")


}

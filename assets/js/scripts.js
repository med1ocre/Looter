//Beginning function to unlock/lock buttons based on players progression
function UpdateTileVisibility(){

  //Create our tiles txt variables at the start so that we can be more efficient at assigning them later...
  let LockedImageSrc = "./assets/media/icons/LockIcon.png";
  let LockedTxt = "Locked";
  let LockedDesc = "Hint: Level up more to unlock this tile!";


  //If player has not made enough progress, we need to disable the tles and set them to a lock sprite.
  //We will be taking our player.level var from our data.js and using that as our way of deciding if the player has progressed enough.
  if(Player.Level < 5){
    //If the player is not level 5 yet, set the market to be locked
    Element.MarketTileImg.src = LockedImageSrc;
    Element.MarketTileTxt.innerHTML = LockedTxt;
    Element.MarketTileDesc.innerHTML = LockedDesc;
    Element.MarketTileBtn.innerHTML = "LOCKED";
    Element.MarketTileBtn.classList.add("disabled");
  }

  if(Player.Level < 10){
    //If the player is not level 5 yet, set the market to be locked
    Element.ForgeTileImg.src = LockedImageSrc;
    Element.ForgeTileTxt.innerHTML = LockedTxt;
    Element.ForgeTileDesc.innerHTML = LockedDesc;
    Element.ForgeTileBtn.innerHTML = "LOCKED";
    Element.ForgeTileBtn.classList.add("disabled");
  }

  if(Player.Level < 20){
    //If the player is not level 5 yet, set the market to be locked
    Element.FarmTileImg.src = LockedImageSrc;
    Element.FarmTileTxt.innerHTML = LockedTxt;
    Element.FarmTileDesc.innerHTML = LockedDesc;
    Element.FarmTileBtn.innerHTML = "LOCKED";
    Element.FarmTileBtn.classList.add("disabled");
  }

  if(Player.Level < 30){
    //If the player is not level 5 yet, set the market to be locked
    Element.BarnTileImg.src = LockedImageSrc;
    Element.BarnTileTxt.innerHTML = LockedTxt;
    Element.BarnTileDesc.innerHTML = LockedDesc;
    Element.BarnTileBtn.innerHTML = "LOCKED";
    Element.BarnTileBtn.classList.add("disabled");
  }

  if(Player.Level < 35){
    //If the player is not level 5 yet, set the market to be locked
    Element.LabTileImg.src = LockedImageSrc;
    Element.LabTileTxt.innerHTML = LockedTxt;
    Element.LabTileDesc.innerHTML = LockedDesc;
    Element.LabTileBtn.innerHTML = "LOCKED";
    Element.LabTileBtn.classList.add("disabled");
  }

}

//Here we check when the index page is laoded, and when it does we will run our tilevisibility function to update our sprites/text to match
window.onload = function(){

  //Loading our savefile on start
  loadGame();
  CharacterLvlTxt.innerHTML = "Level: " + Player.Level;
  //This is asking if we are on the index page or not.
  if (window.location.href.indexOf('index.html') > -1) {
      UpdateTileVisibility();
    }
  //Here we check when the combat page is laoded, and when it does we will run our first few functions
  if (window.location.href.indexOf('combat.html') > -1) {
      StartCombat();
    }
}

//Global random integer function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function RollItemDrop(){
  //First we roll to see what type of item will drop
  //1-60, drop nothing
  //61-80, drop potions/other stuff
  //81-100, drop gear
  let currentDrop = "";
  let itemRoll = getRandomInt(1, 100);

  if(itemRoll >= 1 && itemRoll <= 70){
    currentDrop = "Nothing";
    console.log("The enemy dropped nothing");
  }else if (itemRoll >= 71 && itemRoll <= 80) {
    currentDrop = "Consumable";
    console.log("The enemy dropped a consumable");
  }else if (itemRoll >= 81 && itemRoll <= 100){
    currentDrop = "Gear";
  }
  //Finally, if we land on a gear drop we still start our gear roll function
  //to decide on what kinda stats this item will have
  if(currentDrop == "Gear"){
    RollGearDrop();
  }
}

function RollGearDrop(){
  //If we land on gear we need to run dice roll to see what kind of gear will drop
  //1-10, drop sword
  //11-20, drop helmet
  //21-30, drop chestplate
  //31-40, drop leggings
  //41-50, drop boots
  //51-60, drop rings
  //61-70, drop necklace

  //We use the currentdrop variable as a temporary variable to keep track of what item is currently being dropped
  let currentDrop = "";
  let gearRating = "";
  //the final drop is the last drop after it has been ran through all of the rolls..
  let finalDrop = "";
  //Referencing our randomInt function to grab a random number to decide gear type/rating
  let gearRoll = getRandomInt(1, 70);
  let ratingRoll = getRandomInt(1, 100);
  //Decide which gear will drop
  if(gearRoll >= 1 && gearRoll <= 10){
    currentDrop = "Sword";
  }else if (gearRoll >= 11 && gearRoll <= 20) {
    currentDrop = "Helmet";
  }else if (gearRoll >= 21 && gearRoll <= 30){
    currentDrop = "Chestplate";
  }else if (gearRoll >= 31 && gearRoll <= 40){
    currentDrop = "Leggings";
  }else if (gearRoll >= 41 && gearRoll <= 50){
    currentDrop = "Boots";
  }else if (gearRoll >= 51 && gearRoll <= 60){
    currentDrop = "Ring";
  }else if (gearRoll >= 61 && gearRoll <= 70){
    currentDrop = "Necklace";
  }
  //Next we roll to see what rating the gear will be
  //1-40, common gear
  //41-70, magic gear
  //71-85, rare gear
  //86-95, epic gear
  //96-98, legendary gear
  //99-100, unique gear

  if(ratingRoll >= 1 && ratingRoll <= 40){
    gearRating = "Common";
  }else if (ratingRoll >= 41 && ratingRoll <= 70) {
    gearRating = "Magic";
  }else if (ratingRoll >= 71 && ratingRoll <= 85){
    gearRating = "Rare";
  }else if (ratingRoll >= 86 && ratingRoll <= 95){
    gearRating = "Epic";
  }else if (ratingRoll >= 96 && ratingRoll <= 98){
    gearRating = "Legendary";
  }else if (ratingRoll >= 99 && ratingRoll <= 100){
    gearRating = "Unique";
  }

  //Lastly we combine both of these rolls into one item :)
  finalDrop = gearRating + " " + currentDrop;
  console.log("The enemy dropped a " + finalDrop);

}

//In this function we will check the players exp and level them up based on there current expAmount
function CheckLevelUp(){

  //First we will calculate overflowxp
  overflowxp = Player.Experience -= Player.ExperienceToLvlUp;
  //Next we add to our players level
  Player.Level = Player.Level + 1
  //And then we set our xp to 0 and add our overflow xp!
  Player.Experience = overflowxp;
  //Finally we set our players level text :)
  CharacterLvlTxt.innerHTML = "Level: " + Player.Level;
  //Actually sorry, one more thing.. We need to calculate the amount of exp needed for the next levelup. simple calculation for now, prob will be changed later
  Player.ExperienceToLvlUp = Player.Level * 100 * 1.25;
}

//Here we need to make a function to assign the active enemy variable to whichever random enemy gets picked, we will do this with an array
function AssignEnemy(){
  //Pick a random enemy from an array/list and set it to a var
  let randomEnemy = ForestEnemies[Math.floor(Math.random() * ForestEnemies.length)];

  //Set our activenemy variables to the enemy that gets picked
  if(randomEnemy == "Wolf"){
    ActiveEnemy.Level = Enemy.Wolf.Level;
    ActiveEnemy.CurrentHealth = Enemy.Wolf.TotalHealth;
    ActiveEnemy.TotalHealth = Enemy.Wolf.TotalHealth;
    ActiveEnemy.Name = Enemy.Wolf.Name;
    ActiveEnemy.MinExp = Enemy.Wolf.MinExp;
    ActiveEnemy.MaxExp = Enemy.Wolf.MaxExp;
    //Set the image of the enemy
    EnemyImg.src = Enemy.Wolf.Src;
    EnemyNameText.innerHTML = "Wolf";
  }

  if(randomEnemy == "Boar"){
    ActiveEnemy.Level = Enemy.Boar.Level;
    ActiveEnemy.CurrentHealth = Enemy.Boar.TotalHealth;
    ActiveEnemy.TotalHealth = Enemy.Boar.TotalHealth;
    ActiveEnemy.Name = Enemy.Boar.Name;
    ActiveEnemy.MinExp = Enemy.Boar.MinExp;
    ActiveEnemy.MaxExp = Enemy.Boar.MaxExp;
    //Set the image of the Enemy
    EnemyImg.src = Enemy.Boar.Src;
    EnemyNameText.innerHTML = "Boar";
  }
}

//We need a function to call that will update our health bars so that we can avoid cluttered code
function UpdateEnemyStats(){

  //Set the progress bars value
  EnemyHealthBar.value = ActiveEnemy.CurrentHealth;
  EnemyHealthBar.max = ActiveEnemy.TotalHealth;
  //Set the text value of the progress bar
  Element.EnemyHealthBarText.innerHTML = "Health: " + ActiveEnemy.CurrentHealth + "/" + ActiveEnemy.TotalHealth + "<br>\ Level: " + ActiveEnemy.Level;

}

function PlayerAttack(){

  //We first will make a setINterval that is set to the players attqck speed.
  //Then we set a variable to our interval so we can call it later to cancel it
  let defaultAttackInterval = setInterval(function(){

    ActiveEnemy.CurrentHealth -= Player.MinPhysDmg;
    UpdateEnemyStats();

    //Check enemys health, if its below or equal to 0 we will run our kill enemy func
    if(ActiveEnemy.CurrentHealth <= 0){
      KillEnemy();
    }

  }, Player.AttackSpeed)

}

//Here we have a function that will run whenever an enemy dies
//We will use this function as our home for setting up item drops and stuff..
function KillEnemy(){

  //First we run out item drop table
  RollItemDrop();

  //When killed we will first assign our new enemy.. and update there stats respectively
  AssignEnemy();
  UpdateEnemyStats();
  //Next we move on to exp distribution... We will grab a random number between our min and max xp range and
  //Apply that to our player stats.. Easy!
  expAmount = getRandomInt(ActiveEnemy.MinExp, ActiveEnemy.MaxExp);

  //After we grab our random exp from out random int function we can add it to our players total exp!
  Player.Experience += expAmount;

  //After we add the experience we run a function that checks for levelups
  if(Player.Experience >= Player.ExperienceToLvlUp){
    CheckLevelUp();
  }

}

function StartCombat(){
  //We will call our enemy assigner and then set the health bars to the value
  AssignEnemy();
  UpdateEnemyStats();
  //Finally we run our player attack function
  PlayerAttack();

}

function loadGame(){
  //unparse the save
  var saveGame = JSON.parse(localStorage.getItem("gameSave"));
  //Make sure that the variable is actually defined, this is for updates so we dont throw any errors
  if(typeof saveGame.Player !== "undefined"){
    Player = saveGame.Player;
  }
}

//function to save our game
function saveGame(){
  var gameSave = {
    //setting our obects/values
    Player: Player
  };
  //stringify it for readability
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
  alert("Game Saved!");
}

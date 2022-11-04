//Beginning function to unlock/lock buttons based on players progression
function UpdateTileVisibility(){

  //Create our tiles txt variables at the start so that we can be more efficient at assigning them later...
  let LockedImageSrc = "./assets/media/icons/LockIcon.png";
  let LockedTxt = "Locked";
  let LockedDesc = "Hint: Level up more to unlock this tile!";


  //If player has not made enough progress, we need to disable the tles and set them to a lock sprite.
  //We will be taking our player.level var from our data.js and using that as our way of deciding if the player has progressed enough.
  if(Player.Level <= 5){
    //If the player is not level 5 yet, set the market to be locked
    Element.MarketTileImg.src = LockedImageSrc;
    Element.MarketTileTxt.innerHTML = LockedTxt;
    Element.MarketTileDesc.innerHTML = LockedDesc;
    Element.MarketTileBtn.innerHTML = "LOCKED";
    Element.MarketTileBtn.classList.add("disabled");
  }

  if(Player.Level <= 10){
    //If the player is not level 5 yet, set the market to be locked
    Element.ForgeTileImg.src = LockedImageSrc;
    Element.ForgeTileTxt.innerHTML = LockedTxt;
    Element.ForgeTileDesc.innerHTML = LockedDesc;
    Element.ForgeTileBtn.innerHTML = "LOCKED";
    Element.ForgeTileBtn.classList.add("disabled");
  }

  if(Player.Level <= 20){
    //If the player is not level 5 yet, set the market to be locked
    Element.FarmTileImg.src = LockedImageSrc;
    Element.FarmTileTxt.innerHTML = LockedTxt;
    Element.FarmTileDesc.innerHTML = LockedDesc;
    Element.FarmTileBtn.innerHTML = "LOCKED";
    Element.FarmTileBtn.classList.add("disabled");
  }

  if(Player.Level <= 30){
    //If the player is not level 5 yet, set the market to be locked
    Element.BarnTileImg.src = LockedImageSrc;
    Element.BarnTileTxt.innerHTML = LockedTxt;
    Element.BarnTileDesc.innerHTML = LockedDesc;
    Element.BarnTileBtn.innerHTML = "LOCKED";
    Element.BarnTileBtn.classList.add("disabled");
  }

  if(Player.Level <= 35){
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

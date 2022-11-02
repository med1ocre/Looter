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
}

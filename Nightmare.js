//REWRITTEN BACK SO IT WILL WORK ON 0.15

//Here comes the line, just, dont TOUCH!
var zombie = false;
var zombieEnt = [];
var enderman = false;
var endermanEnt = [];
var skeleton = false;
var skeletonEnt = [];
var creeper = false;
var creeperEnt = [];

//WILL BE ADDED IN THE FUTURE//

/*function setAILevel(creeper,skeleton,enderman,zombie,herobrine){
if(creeper==1){
}
if(creeper==2){
}
if(creeper==3){
}
if(creeper==4){
}
if(creeper==5){
}
if(skeleton==1){
}
if(skeleton==2){
}
if(skeleton==3){
}
if(skeleton==4){
}
if(skeleton==5){
}
if(enderman==1){
}
if(enderman==2){
}
if(enderman==3){
}
if(enderman==4){
}
if(enderman==5){
}
if(zombie==1){
}
if(zombie==2){
}
if(zombie==3){
}
if(zombie==4){
}
if(zombie==5){
}
}*/
//////////////////////////////



//this defines the mob that spawned and adds it into an array so they can have the custom nightmare AI//
function entityAddedHook(entity){
 if(Entity.getEntityTypeId(entity) == 32){
 zombieEnt.push(entity)
 Entity.setHealth(entity,30)
 }
 if(Entity.getEntityTypeId(entity) == 33){
 creeperEnt.push(entity)
 Entity.setHealth(entity,20)
 }
 if(Entity.getEntityTypeId(entity) == 34){
 skeletonEnt.push(entity)
 Entity.setHealth(entity,20)
 }
 if(Entity.getEntityTypeId(entity) == 38){
 endermanEnt.push(entity)
 Entity.setHealth(entity,40)
 }
 }
 
//Will show the creator message when you enter the world//
function newLevel(){
creatorMessage("Thanks for downloading the Nightmare Mod!")
//This will activate their AIs//
zombieAI(true)
creeperAI(true)
endermanAI(true)
skeletonAI(true)
}


//Used to remove them from the arrays when they despawn or killed//
function entityRemovedHook(entity){
 if(zombie==true){
  if(Entity.getEntityTypeId(entity) == 32){
   for(i=0;i<zombieEnt.length;i++)
  zombieEnt.splice(entity,1)
  }
  }
  if(enderman==true){
  if(Entity.getEntityTypeId(entity) == 38){
  for(i=0;i<endermanEnt.length;i++)
  endermanEnt.splice(entity,1)
  }
  }
  if(skeleton==true){
  if(Entity.getEntityTypeId(entity) == 34){
  for(i=0;i<skeletonEnt.length;i++)
  skeletonEnt.splice(entity,1)
  }
  }
  if(creeper==true){
  if(Entity.getEntityTypeId(entity) == 33){
  for(i=0;i<creeperEnt.length;i++)
  creeperEnt.splice(entity,1)
}
}
}

//Used when an entity dies//
function deathHook(a,v){
if(creeper==true){
if(Entity.getEntityTypeId(v)==33){
for(i=0;i<creeperEnt.length;i++)
explode(Entity.getX(creeperEnt[i]), Entity.getY(creeperEnt[i]), Entity.getZ(creeperEnt[i]), 9)
}
}
if(skeleton == true){
   for(i=0;i<skeletonEnt.length;i++)
     if(v==skeletonEnt[i]){
     Level.spawnMob(Entity.getX(skeletonEnt[i]), Entity.getY(skeletonEnt[i]), Entity.getZ(skeletonEnt[i]),34)
}
}
}



var herobrinetick = 200;
var herobrine1 = 30;
//Used to make their AI etc//
function modTick(){
  if(zombie == true){
   for(i=0;i<zombieEnt.length;i++)
     if(compareDistance(zombieEnt[i],40)){
     	 		var wcoX = Math.round(Entity.getX(zombieEnt[i]));
		 var countdown = 0, countdownJump = 0;
		var wcoZ = Math.round(Entity.getZ(zombieEnt[i]));
		var wvX = 0, wvZ = 0;
     			var sEX = Math.round(Player.getX());
			var sEY = Math.round(Player.getY());
			var sEZ = Math.round(Player.getZ());
			var yaw = Math.atan2((sEZ - wcoZ), (sEX - wcoX));	
				if(getTile(Entity.getX(zombieEnt[i])+1,Entity.getY(zombieEnt[i]),Entity.getZ(zombieEnt[i])) > 0
						 ||getTile(Entity.getX(zombieEnt[i])+1,Entity.getY(zombieEnt[i])+1,Entity.getZ(zombieEnt[i])) >0
						 		||getTile(Entity.getX(zombieEnt[i])-1,Entity.getY(zombieEnt[i]),Entity.getZ(zombieEnt[i]))	 > 0
						 		 ||getTile(Entity.getX(zombieEnt[i])-1,Entity.getY(zombieEnt[i])+1,Entity.getZ(zombieEnt[i])+1)				 			 		> 0
			 			||getTile(Entity.getX(zombieEnt[i])+1,Entity.getY(zombieEnt[i]),Entity.getZ(zombieEnt[i])+1)	 > 0
			 				 ||getTile(Entity.getX(zombieEnt[i])+1,Entity.getY(zombieEnt[i])+1,Entity.getZ(zombieEnt[i])+1) > 0
			 				 			||getTile(Entity.getX(zombieEnt[i])-1,Entity.getY(zombieEnt[i]),Entity.getZ(zombieEnt[i])-1)	 > 0
			 				 				 ||getTile(Entity.getX(zombieEnt[i])-1,Entity.getY(zombieEnt[i])+1,Entity.getZ(zombieEnt[i])-1) 	> 0 
                ||getTile(Entity.getX(zombieEnt[i]),Entity.getY(zombieEnt[i]),Entity.getZ(zombieEnt[i])-1) > 0
						 ||getTile(Entity.getX(zombieEnt[i]),Entity.getY(zombieEnt[i])+1,Entity.getZ(zombieEnt[i])-1) >0
						 		||getTile(Entity.getX(zombieEnt[i]),Entity.getY(zombieEnt[i]),Entity.getZ(zombieEnt[i])+1)	 > 0
						 		 ||getTile(Entity.getX(zombieEnt[i]),Entity.getY(zombieEnt[i])+1,Entity.getZ(zombieEnt[i])+1)				 			 		> 0){
				Entity.setVelY(zombieEnt[i],0.300)
				}
			if((sEX - 3) > wcoX)
			{
				wvX = 0.15;
			}
			if((sEZ - 3) > wcoZ)
			{
				wvZ = 0.15;
			}
			if(wcoX > (sEX + 3))
			{
				wvX = -0.15;
			}
			if(wcoZ > (sEZ + 3))
			{
				wvZ = -0.15;
			}
			Entity.setVelX(zombieEnt[i], wvX);
			Entity.setVelZ(zombieEnt[i], wvZ);
			Entity.setRot(zombieEnt[i], (((yaw * 180) / 3.14) + 270), Entity.getPitch(zombieEnt[i]));
			if(Math.pow((sEX - wcoX), 2) + Math.pow((sEZ - wcoZ), 2) >= 30)
			{
				countdownJump++;
				if(countdownJump == 40)
				{
					countdownJump = 0;
					Entity.setVelY(zombieEnt[i], 0.4);
				}
			}

		}
		 if(compareDistance(zombieEnt[i],5)){
		 Entity.setPosition(zombieEnt[i],getPlayerX(),getPlayerY()+1,getPlayerZ())
		 }
	}
	 if(enderman == true){
   for(i=0;i<endermanEnt.length;i++)
     if(compareDistance(endermanEnt[i],15)){
   		var wcoX = Math.round(getPlayerX());
		 var countdown = 0, countdownJump = 0;
		var wcoZ = Math.round(getPlayerZ());
		var wvX = 0, wvZ = 0;
     			var sEX = Math.round( Entity.getX(endermanEnt[i]) );
			var sEY = Math.round( Entity.getY(endermanEnt[i]) );
			var sEZ = Math.round( Entity.getZ(endermanEnt[i]) );
			var yaw = Math.atan2((sEZ - wcoZ), (sEX - wcoX));	
			if((sEX - 3) > wcoX)
			{
				wvX = 0.15;
			}
			if((sEZ - 3) > wcoZ)
			{
				wvZ = 0.15;
			}
			if(wcoX > (sEX + 3))
			{
				wvX = -0.15;
			}
			if(wcoZ > (sEZ + 3))
			{
				wvZ = -0.15;
			}
			Entity.setVelX(getPlayerEnt(), wvX);
			Entity.setVelZ(getPlayerEnt(), wvZ);
			Entity.setRot(getPlayerEnt(), (((yaw * 180) / 3.14) + 270), Entity.getPitch(getPlayerEnt()));
			}
if(compareDistance(endermanEnt[i],0)){
etick=40;
}
}
}



var herobrine

var etick=40;

function creatorMessage(string){
  clientMessage("[BagasMC] " + string)
}

function zombieAI(boolean){
  if(boolean == true){
   zombie = true;
   zombieEnt;
   }
  }
  
  function endermanAI(boolean){
  if(boolean == true){
   enderman = true;
   endermanEnt;
   }
  }
  
  function skeletonAI(boolean){
  if(boolean == true){
   skeleton = true;
   skeletonEnt;
   }
  }
  
  function creeperAI(boolean){
  if(boolean == true){
   creeper = true;
   creeperEnt;
   }
  }
  

  
function Vector3D(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z
}

function lookDir() {
    var direction = new Vector3D(0, 0, 0);
    var yaw = getYaw();
    var pitch = getPitch();
    direction.y = -Math.sin(java.lang.Math.toRadians(pitch));
    direction.x = -Math.sin(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));   direction.z = Math.cos(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
    return direction
}

function compareDistance(ent, distance) {
    return Math.abs(Entity.getX(ent) - Player.getX()) < distance && Math.abs(Entity.getY(ent) - Player.getY()) < distance && Math.abs(Entity.getZ(ent) - Player.getZ()) < distance
}

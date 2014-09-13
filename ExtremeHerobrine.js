//Scripted by bagas

function newLevel() {
 clientMessage(ChatColor.YELLOW + "Extreme Herobrine by BagasMC")
 }

//*global variables*//
var version = "1.4.8";
var newVersion;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Herobrine;
var AltBrine;

//*items,texture*//
 ModPE.overrideTexture("images/herobrineextreme.png", "https://dl.dropbox.com/s/1fba5tsvzc03qgk/skin_20140626100232131481.png");
 ModPE.overrideTexture("images/altbrine.png", "https://dl.dropbox.com/s/1fba5tsvzc03qgk/skin_20140626100232131481.png");
ModPE.setItem(454,"apple_golden", 0, "Spawner of Herobrine");
ModPE.setItem(456,"gold_nugget", 0, "Golden Tears");
ModPE.setItem(381,"ender_eye", 0, "Eye of Ender");
ModPE.setItem(368,"ender_pearl", 0, "Ender Pearl");
ModPE.setItem(369,"blaze_rod", 0, "Blaze Rod");

//*crafting recipes*//
Item.addCraftRecipe(454, 1, 0, [456,4,0, 381,1,0, 456,4,0]);
Item.addCraftRecipe(456, 2, 0, [352,4,0, 381,1,0, 352,4,0]);
Item.addCraftRecipe(381, 2, 0, [368,4,0, 369,1,0, 368,4,0]);
Item.addCraftRecipe(369, 2, 0, [264,2,0, 264,2,0, 264,2,0]);
Item.addCraftRecipe(368, 1, 0, [340,4,0, 331,1,0, 340,4,0]);

//*spawner*//

function useItem (x, y, z,itemId, blockId, side)//useItem Code goes here
{
    if(itemId == 454)//If the item used is nothing
    {
        var Herobrine = Level.spawnMob(x,y,z,38,"herobrineextreme.png"); //spawns mob, variable "custom", and uses the skin char
        Entity.setRenderType(Herobrine,3); //changes the rendertype of the mob custom to a player
ModPE.showTipMessage("Hello There...")
Entity.setNameTag(Herobrine, "Herobrine");//gives the mob a nametag cause #yolo
Entity.setHealth(Herobrine, 100);//sets the mobs health to 70
}
}
function procCmd(c) {
   var m = c.split(' ');
   var command = m[0];
   switch(command) {
           case 'herobrine': {
 clientMessage(ChatColor.GOLD + '[SGMS] §fAlternate Herobrine Boss has SPAWNED');
 AltBrine = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 34,"altbrine.png");
Entity.setHealth( AltBrine ,150);
Entity.setRenderType( AltBrine , 3);
Entity.setCarriedItem( AltBrine, 278, 1, 30);
break;}
};
}





//*Debug Function (DF)*//
function modTick(){
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
}
//*death message*//
function deathHook(a, Herobrine){//when a mob dies
if (Entity.getMobSkin(Herobrine)=="herobrineextreme.png"){//if the mob has that mob skin
ModPE.showTipMessage("CRITICAL HIT!!!!: " + (Entity.getHealth(Herobrine) / 2));
ModPE.showTipMessage("CRITICAL HIT!!!!: " + (Entity.getHealth(Herobrine) / 2));
Level.dropItem(Entity.getX(Herobrine),Entity.getY(Herobrine),Entity.getZ(Herobrine),1,10,2);//drops some fire and lava :P
Level.dropItem(Entity.getX(Herobrine),Entity.getY(Herobrine),Entity.getZ(Herobrine),1,51,2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)-0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine) , Entity.getY(Herobrine), Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(Herobrine)+0.2 , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 0, 0, 0, 2);
Level.explode(Entity.getX(Herobrine) , Entity.getY(Herobrine)+1, Entity.getZ(Herobrine), 10);
Level.spawnMob(Entity.getX(Herobrine), Entity.getY(Herobrine) ,Entity.getZ(Herobrine)+1,38,"mob/enderman.png");
Level.spawnMob(Entity.getX(Herobrine), Entity.getY(Herobrine) ,Entity.getZ(Herobrine)+1,38,"mob/enderman.png");
Level.spawnMob(Entity.getX(Herobrine), Entity.getY(Herobrine) ,Entity.getZ(Herobrine)+1,38,"mob/enderman.png");
Level.spawnMob(Entity.getX(Herobrine), Entity.getY(Herobrine) ,Entity.getZ(Herobrine)+1,38,"mob/enderman.png");
clientMessage(ChatColor.DARK_RED + "HOW DARE YOU");
clientMessage(ChatColor.DARK_BLUE + "TASTE THAT HAHAHA");
clientMessage(ChatColor.YELLOW + "Mod Creator : Bagas");
	}	} 	
//*attack hook*//
function attackHook(a, v){//when something attacks
if(Entity.getMobSkin(v)=="herobrineextreme.png"){//if the victim has that mob 
Level.playSoundEnt(v, "mob.zombiepig.zpigangry", 100, 30);//plays a 
ModPE.showTipMessage("Herobrine's health: " + (Entity.getHealth(v) / 2));
Level.spawnMob(Entity.getX(v), Entity.getY(v) ,Entity.getZ(v)+1,19,"mob/enderman.png");
Level.spawnMob(Entity.getX(v), Entity.getY(v) ,Entity.getZ(v)+1,19,"mob/enderman.png");
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)-0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v) , Entity.getY(v), Entity.getZ(v), 0, 0, 0, 2);
Level.addParticle(ParticleType.lava, Entity.getX(v)+0.2 , Entity.getY(v)+1, Entity.getZ(v), 0, 0, 0, 2);
Level.spawnMob(Entity.getX(v), Entity.getY(v) ,Entity.getZ(v)+1,37,"mob/magmacube.png");
Level.spawnMob(Entity.getX(v), Entity.getY(v) ,Entity.getZ(v)+1,38,"mob/enderman.png");
Level.spawnMob(Entity.getX(v), Entity.getY(v) ,Entity.getZ(v)+1,32,"mob/zombie.png");
Level.spawnMob(Entity.getX(v), Entity.getY(v) ,Entity.getZ(v)+1,32,"mob/zombie.png")


}
}
function showBind() {
	ctx.runOnUiThread(new java.lang.Runnable( { run: function () {
		try {
			var btn = new android.widget.Button(ctx);
			btn.setText(bindCommand[0].toUpperCase());
			btn.setTextColor(android.graphics.Color.CYAN);
			btn.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function () {
					main(bindCommand);
				}
			});
			bindBtn = new android.widget.PopupWindow(btn, android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
			if(bindLft) {
				bindBtn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.LEFT, dip2px(ctx, 85), dip2px(ctx, 85));
			}
			else {
				bindBtn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, dip2px(ctx, 85), dip2px(ctx, 85));
			}
		} catch(e) {
			errorMsg("Line 1110: " + e);
		}
	}}));
}

function dismissBind() {
	ctx.runOnUiThread(new java.lang.Runnable({ run: function () {
		if (bindBtn != null) {
			bindBtn.dismiss();
		}
	}}));
	bindCommand = [];
}

function compareVersion() {
	var r  = new java.lang.Runnable({ run: function() {
		try {
			var u = new java.net.URL("https://raw.githubusercontent.com/bagas123/Mod-Creations/master/version");
			var c = u.openConnection();
			c.setRequestMethod("GET");
			c.setDoOutput(true);
			c.connect();
			c.getContentLength();
			var input = c.getInputStream();
			var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
			var bytesRead = 0; 
			var strFileContents;
			while((bytesRead = input.read(contents)) != -1) { 
				strFileContents = new java.lang.String(contents, 0, bytesRead);			   
			}
			newVersion = strFileContents;
			if(version+"\n" != strFileContents) {
				colourMsg("New version! " + newVersion);
				showDownloadAlert = true;
			}
			
		}
		catch(e) {
			if(e == "JavaException: java.net.UnknownHostException: Unable to resolve host \"raw.githubusercontent.com\": No address associated with hostname") { }
			else {
				errorMsg("Hmm.." + e);
			}
		}
	}});
	var th = new java.lang.Thread(r);
	th.start();
}

function updateScript() {
	try {
		var builder = new android.app.AlertDialog.Builder(ctx);
		builder.setTitle("New version available!");
		builder.setMessage("An update to Extreme Herobrine Mod was found!\nWould you like to download it now?\nCurrent version: " + version + "\nNew version: " + newVersion);
		builder.setNegativeButton("No", new android.content.DialogInterface.OnClickListener() {
			onClick: function(par1) {
				dialog.dismiss();
			}
		});
		builder.setPositiveButton("Yes", new android.content.DialogInterface.OnClickListener() {
			onClick: function(par1) {
				var ru  = new java.lang.Runnable({ run: function() {
					try {
						var u = new java.net.URL("https://raw.githubusercontent.com/bagas123/Mod-Creations/master/ExtremeHerobrine.js");
						var c = u.openConnection();
						c.setRequestMethod("GET");
						c.setDoOutput(true);
						c.connect();
						c.getContentLength();
						var input = c.getInputStream();
						var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
						var bytesRead = 0;
						while((bytesRead = input.read(contents)) != -1) { 
							newScript += new java.lang.String(contents, 0, bytesRead);			   
						}
						var patchesFolder = ctx.getDir("modscripts", 0);
						var scriptFile = new java.io.File(patchesFolder, "ExtremeHerobrine.js");
						var printWriter = new java.io.PrintWriter(scriptFile);
						printWriter.write(newScript);
						printWriter.flush();
						printWriter.close();
						try {
							net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, false);
							net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, true);
							colourMsg("Downloaded and enabled!");
						}
						catch(e) {
							errorMsg("Line 451: " + e);
						}
					}
					catch(e) {
						errorMsg("Line 466: " + e);
					}
				}});
				var th = new java.lang.Thread(ru);
				th.start();
			}
		});
		var dialog = builder.create();
		dialog.show()
	}
	catch(e) {
		errorMsg("Line 484: " + e);
	}
}


class Game{
    contructor(){}
    getState(){
        var gameref= database.ref('gameSate');
        gameref.on("value", function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref('/').this.update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player= new Player();
            var playerRef= await database.ref('playerCount').once(value)
            if(playerRef.exists()){
                playerCount=playerRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        Player.getPlayerInfo()
      if(allPlayers!==undefined)  {
        var pos=130
        for(var plr in allPlayers){
            text (allPlayers[plr].name +":"+ allPlayers[plr].distance, 100,pos)
            pos+-50
        }
      }
      if(keyIsDown(UP_ARROW)&& player.index!==null){
          player.distance +=50
          player.update();
      }
    }
}
class Player{
    constructor(){
this.index=null
this.distance=0
this.name=null
    }
    getCount(){
        var playerRef = database.ref('playerCount');
        playerRef.on("value",(data)=>{
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerindex= "players/player"+this.index;
        database.ref (playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }
  static  getPlayerInfo(){
  var playerRef=database.ref("players") 
       playerRef.on("value",(data)=>{
           allPlayers=data.val();
       })
    }
}
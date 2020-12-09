class Player{
    constructor(){

    }
    getCount(){
      var PlayerCountref = database.ref("PlayerCount")
      PlayerCountref.on("Value",function(data){
        PlayerCount = data.val()
      }) 
    
    }
    updateCount(Count){
        database.ref("/").update({
            PlayerCount:Count
        })
    }
    update(Name){
        var PlayerIndex = "Player"+ PlayerCount
        database.ref(PlayerIndex).set({
        Name:Name
        })
    }
}
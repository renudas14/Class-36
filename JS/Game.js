class Game{
    constructor(){

    }
    getState(){
      var Gamestateref = database.ref("GameState")
     Gamestateref.on("Value",function(data){
        GameState = data.val()
      }) 
    
    }
    update(State){
        database.ref("/").update({
            GameState:State
        })
    }
    start(){
        if(GameState===0){
            player= new Player ()
            player.getCount()
            form = new Form ()
            form.display() 
        }
    }
}
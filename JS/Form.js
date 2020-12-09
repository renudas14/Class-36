class Form{  
    constructor(){

    } 

    display() { 
        var Title =  createElement("h1")
        Title.html("Welcome To Car Racing")
        Title.position(130,0)
        var Input = createInput("Name")
        Input.position(130,160)
        var Button = createButton("Play")
        Button.mousePressed(function(){
                        
        })
    }
}
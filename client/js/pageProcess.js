window.onload = function(){
    //Aliases
    let Application = PIXI.Application,
        Container = PIXI.Container,
        loader = PIXI.loader,
        resources = PIXI.loader.resources,
        TextureCache = PIXI.utils.TextureCache,
        Sprite = PIXI.Sprite,
        Rectangle = PIXI.Rectangle;

    let app = new PIXI.Application({ 
        width: 600,         // default: 800
        height: 400,        // default: 600
        antialias: true,    // default: false
        transparent: false, // default: false
        resolution: 1       // default: 1
      }
    );

    // Add the view to the DOM
    document.body.appendChild(app.view);

    PIXI.loader
    .add("./public/cat.png")
    .load(setup);
    
    //Define any variables that are used in more than one function
    let cat;

    // Object loader
    function setup(){
        //Create the cat sprite
        cat = new Sprite(resources["./public/cat.png"].texture);
        //cat.x = 96;
        cat.y = 96;
         
        //Add the cat to the stage
        app.stage.addChild(cat);
    }
    

    
    



}
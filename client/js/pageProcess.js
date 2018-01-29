window.onload = function(){

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


    // Object loader
    app.stage.addChild(PIXI.Sprite.fromImage('something.png'));
    



}
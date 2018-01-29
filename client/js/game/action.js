//document.onkeydown = onKeyPress.bind(this)


// document.onkeydown = keyHandler.bind(this)
// function keyHandler(event) {
//     var e = event || window.event
//     console.log(e.keyCode)
//     switch (e.keyCode) {
//         case 38: this.cat.y -= 1 //haut
//             break
//         case 40: this.cat.y += 1 //bas
//             break
//         case 37: this.cat.x -= 1 //gauche
//             break
//         case 39: this.cat.x += 1 //droite
//             break
//     }
// }

document.onkeypress = function (callback) {
    //console.log('callback => ' + callback.keyCode);
    //console.log('callback => ' + callback.keyCode);
    var keys = {},
        keysCount = 0,
        interval = null,
        trackedKeys = {
            119: true, // W
            87: true, // w
            115: true, // S
            83: true, // s
            97: true, // A
            65: true, // a
            100: true, // D
            68: true, // d
            37: true, // left arrow
            38: true, // up arrow
            39: true, // right arrow
            40: true // down arrow
        };

    document.onkeydown = function (event) {
        var code = event.keyCode
        console.log('Pas le bon code '+code)
        

//TODO : faire le mappage des touches du jeux

    }

    document.onkeyup = function (event) {
        var code = event.keyCode
        console.log('UP')

        if (keys[code]) {
            delete keys[code];
            keysCount--;
        }

        if ((trackedKeys[code]) && (keysCount === 0)) {
            clearInterval(interval)
            interval = null
            //callback('none')
        }
    }

}
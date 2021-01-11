var lights = [];
var lightCount = 100;
var theCanvasContext = null;
var lightHeight = 5;
var lightWidth = 3;


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function initLights(count){
    for (let index = 0; index < count; index++) {
        lights.push(false);        
    }
}

function getLightOn(){
    let random = getRandomIntInclusive(0,1);
    return random === 1;
}

function changeBulbs(numberOfChanges){
    for (let index = 0; index < numberOfChanges; index++) {
        let bulbIndex = getRandomIntInclusive(0,lightCount);
        lights[bulbIndex] = getLightOn();           
    }
}

function showLight(indexOfLight, state){
    if (state){
        theCanvasContext.fillStyle="yellow";
    } else {
        theCanvasContext.fillStyle="black";
    }
    theCanvasContext.fillRect(indexOfLight * lightWidth,0,lightWidth,lightHeight);
}

function showLights(){
    for (let index = 0; index < lights.length; index++) {
        showLight(index, lights[index]);
    }    
}

function replaceLightbulbs(){
    showLights();
    requestAnimationFrame(replaceLightbulbs);
}


function showTheLights(canvas, canvasWidth){        
    theCanvasContext = canvas;
    lightWidth = canvasWidth / lightCount;

    initLights(lightCount);
    requestAnimationFrame(replaceLightbulbs);
    setInterval(() => {
        changeBulbs(5);
    }, 500);
}


arrayPosizioniX = [];
arrayPosizioniY = [];
arrayPosizioniZ = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    normalMaterial();

    console.log('Valore di X:' + Math.sqrt(Math.pow(300, 2)-(Math.pow((100 - 0), 2))));
    console.log('Valore di Y:' + -Math.sqrt(Math.pow(300, 2)-(Math.pow((100 - 0), 2))));
    
    for(let i = 0; i < 100; i++) {
        arrayPosizioniX.push(random(400));
        arrayPosizioniY.push(random(400));
        arrayPosizioniZ.push(random(200));
    }
}

var i = 0;

function draw() {
    // camera(200, 200, 300, 0, 0, 0); 
    background('black');
    
    orbitControl();
    noFill();
    stroke(100, 100, 240);

    push();
    //rotate(i); 
    //i += 0.005;
    
    ellipse(0, 0, 600, 600);
    pop();
    push();
    rotate(i);
    for(let i = 0; i < arrayPosizioniX.length; i++) {
        push();
        translate(Math.sqrt(Math.pow(300, 2)-(Math.pow((100 - 0), 2))), -Math.sqrt(Math.pow(300, 2)-(Math.pow((100 - 0), 2))), 0);
        
        box(30, 50);
        pop();
    }
    pop();
}
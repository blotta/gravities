function retCopy2d(v){
    return new p5.Vector(v.x, v.y);
}

function setup() {
    var cnv = createCanvas(600, 800);
    cnv.parent('sketch-holder');
    frameRate(30);
    p1 = new p5.Vector(50, 0);
    p2 = new p5.Vector(50, height-100);
    p3 = new p5.Vector(width-50, height-100);
    p4 = new p5.Vector(width-50, 0);
    gravity = new p5.Vector(0,1).mult(0.1);
    ship = new Ship();

    gFields = [];

    // test = new p5.Vector(10, 10);
    // console.log(test.mag());
}

function getInput(){
    if(keyIsDown(UP_ARROW) || keyIsDown(87)){
        ship.goForward();
    }
    if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
        ship.rotateRight();
    }
    if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){
        ship.goBackwards();
    }
    if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
        ship.rotateLeft();
    }

}

function mouseClicked(){
    gFields.push(new gravField(mouseX, mouseY));

    return false;
}


function draw() {
    background(51);

    fill(100,100);
    noStroke();
    rect(p1.x,p1.y, p3.x-p1.x, p3.y-p1.y);

    for(var i = 0; i < gFields.length; i++){

        gFields[i].display();
    }

    getInput();

    ship.update();
    ship.display();

}

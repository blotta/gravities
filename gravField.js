function gravField(x, y){

    this.pos = createVector(x, y);
    //this.pullDir = random(-1, 1);
    this.pullRadius = random(50, 100);
    this.pull = map(this.pullRadius, 50, 100, 0.4, 3);//random(0.4,3);
    //console.log(this.pull);


    this.display = function(){
        push();
        translate(this.pos.x, this.pos.y);
        fill(200);
        ellipse(0,0, 10,10);
        fill(0, map(this.pull, 0.4, 3, 50, 150 ),0, 100);
        ellipse(0,0, this.pullRadius*2);
        // stroke(255);
        // textSize(12);
        // text(this.pull, 22, -22);
        pop();
    }
}

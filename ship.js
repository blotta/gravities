function Ship(){
    this.pos = createVector(width/2, height/2);
    this.speed = createVector(0, 0);
    // this.max_speed = 10;
    this.accel = createVector(0, 0);
    // this.mass = 10;
    this.rot = 0;
    this.thrust = 0.5;

    this.forces = [];

    this.display = function(){
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.rot);
        stroke(255);
        noFill();
        triangle(20, 0, -5, 10, -5, -10);
        stroke(255);
        point(0,0);
        pop();
    }

    this.applyForce = function(){
        //this.accel.add(force);
        var fSum = createVector(0);
        while(this.forces.length > 0){
            fSum.add(this.forces.pop())
        }
        this.accel.add(fSum);
        console.log(this.accel.mag());
    }

    this.update = function(){
        this.checkGravField();

        this.applyForce();

        this.speed.add(this.accel);
        this.pos.add(this.speed);
        if(this.pos.x > width - 50 ){
            this.forces.push(createVector(-1, 0));
        }else if(this.pos.x < 50){
            this.forces.push(createVector(1, 0));
        }

        if(this.pos.y > height - 100){
            this.forces.push(createVector(0,-1));
        }
        this.accel.mult(0);
    }

    this.checkGravField = function(){

        for(var i = 0; i < gFields.length; i++){

            var gf_v = new p5.Vector(gFields[i].pos.x - this.pos.x, gFields[i].pos.y - this.pos.y);

            var distance = gf_v.mag();
            if(distance < gFields[i].pullRadius){
                var relPull = map(distance, 0, gFields[i].pullRadius, gFields[i].pull, 0)
                this.forces.push(gf_v.normalize().mult(relPull));
                //console.log('Pulling! '+gf_v.mag());
            }
        }
    }

    this.goForward = function(){
        this.forces.push(p5.Vector.fromAngle(this.rot).mult(this.thrust));
        // console.log(this.forces);
    }
    this.goBackwards = function(){
        this.forces.push(p5.Vector.fromAngle(this.rot - PI).mult(this.thrust));
    }

    this.rotateRight = function(){
        this.rot += 0.05;
    }

    this.rotateLeft = function(){
        this.rot -= 0.05;
    }
}

class playerarrow{
    constructor(x,y,angle){
        this.x=x;
        this.y=y;
        this.width=10
        this.height=100;
        this.angle=angle;
        var options={
            isStatic:true,
            frictionAir:0.01,
            density:1.0
        }
        this.image=loadImage("./assets/canva-photo-editor (3).png");
        this.trajectory=[];
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    shoot(){
        var velocity=p5.Vector.fromAngle(PlayerArcher.angle);
        velocity.mult(20);
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});
        Matter.Body.setAngle(this.body,PlayerArcher.angle);
        Matter.Body.setStatic(this.body,false);
        }
    display(){
        var pos=this.body.position;
        if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
            this.angle += 0.02;
          }
      
          if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
            this.angle -= 0.02;
          }
        push();
      imageMode(LEFT)
      translate(pos.x,pos.y);
      rotate(this.angle);
      image(this.image,0,0,this.width,this.height);
      pop();
      if(this.body.velocity.x>0 && this.body.position.x>300){
        var position=[this.body.position.x,this.body.position.y];
        this.trajectory.push(position);
      }
     
      for(var x=0;x < this.trajectory.length; x++){
         ellipse(this.trajectory[x][0],this.trajectory[x][1],5,5);
      }
    }
    }

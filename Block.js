class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("tin transparent.png");
      this.visibility = 255;
      
      
      World.add(world, this.body);
    }
    
    display(){
      console.log(this.Visibility);
      if(this.body.speed<4){
        
      
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-5;
        tint(255,this.Visibility);
        
        pop();
      }
    }
  }
  
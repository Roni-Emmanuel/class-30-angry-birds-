class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255; 
  }
  display (){
    
    // to know the speed of pig object 
    //console.log(this.body.speed);
    // the word "this" is used to refer to the object created by this class 

    // if the speed of the object becomes greater than 3, then it should vanish
    
      if (this.body.speed<3) {
        super.display();     
      }
      else {
      World.remove(world, this.body);
      // it should vanish slowy and not immediately and not instantly
      push();
      this.Visiblity = this.Visiblity-5;
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();

      }
  }

};
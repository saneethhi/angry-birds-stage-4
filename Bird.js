class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);//calling constructor of baseclass
    this.image = loadImage("sprites/bird.png");//overiding baseclass
  }

  Display() {
    super.Display();
  }
}

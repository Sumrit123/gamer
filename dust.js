class Dust{
    constructor(x,y,width,height){
var options={
   // restitution:0.8,
    //friction:0.5,
    //density:0.3
isStatic:true}
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
   // this.image=loadImage("paper.png")
    World.add(world,this.body)
}
display(){
    var pos=this.body.position
   // var angle=this.body.angle
    //push();
    //translate(pos.x,pos.y)
    //rotate(angle)
    rect(pos.x,pos.y,this.width,this.height)
}
}
Rectangle.prototype.getArea = function()
{
    console.log("Getting Area using prototype property : " +this.width * this.height);
}

console.log(Rectangle.prototype);
myRect1.getArea();
myRect2.getArea();
myRect3.getArea();
myRect4.getArea();

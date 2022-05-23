var Rectangle = function(width,height) //declaring object with "constructor function"
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is: " +this.width * this.height);
    }
}

var myRect1 = new Rectangle(2,4);
var myRect2 = new Rectangle(8,2);
var myRect3 = new Rectangle(2,6);
var myRect4 = new Rectangle(5,4);

console.log(myRect1.width);
console.log(myRect1.height);
myRect1.area();
console.log("\n");
console.log(myRect2.width);
console.log(myRect2.height);
myRect2.area();
console.log("\n")
console.log(myRect3.width);
console.log(myRect3.height);
myRect3.area();
console.log("\n")
console.log(myRect4.width);
console.log(myRect4.height);
myRect4.area();
console.log("\n")

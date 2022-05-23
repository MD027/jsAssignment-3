Rectangle.prototype.getAreaForRect = function(width,height)  //this is because of Global scope and LOcal scope.
{
    console.log("Getting Area using prototype property : " +width * height);
}

console.log(Rectangle.prototype);
myRect1.getAreaForRect(2,3);
myRect2.getAreaForRect(8,6);
myRect3.getAreaForRect(5,3);
myRect4.getAreaForRect(1,6);

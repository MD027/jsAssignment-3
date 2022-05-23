function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
MOhit= new Person("MOhit","Kumar",78,['java','c#'],"01/01/1999",{city:"Chennai",pincode:67856},"false","Analyst");
Meet= new Person("Meet",44,["html","css"],"04/05/1997","false","SrAnalyst");
dhruv= new Person("dhruv",20,"08/09/2001","false","student");

var Meet = Object.create(MOhit);
var dhruv = Object.create(Meet);
print = function()
{
    console.log(MOhit);
    console.log(Meet.lastName);
    console.log(Meet.address);
    console.log(dhruv.lastName);
    console.log(dhruv.skills);
    console.log(dhruv.address);
    console.log(dhruv.firstName);
}();

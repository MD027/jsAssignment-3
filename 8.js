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

Person1 = new Person("Mohit","Kumar",80,['java','c#'],"28/01/1995",{city:"HMT",pincode:383001},"false","Developer");
Person2 = new Person("RK","kumar",25,["C","c#"],"24/02/1999",{city:"RJ",pincode:382015},"false","Analyst");

console.log(Person1);
console.log(Person2);

print=function()
{
    console.log(Person1);
    console.log(Person2);
}();

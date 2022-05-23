const myString = '{"firstName":"Bhaskar",  "lastName":"Kumar"}';
const ob = JSON.parse(myString);
ob.firstName = eval("(" +ob.firstName+")");

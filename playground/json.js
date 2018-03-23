/*var obj = {
    name : 'Andrew'
};
var stringObj = JSON.stringify(obj);//convert object ino string
console.log(typeof stringObj);
console.log(stringObj);
//output
//string
// { "name": "Andrew"}
var personString = '{"name":"Andrew","age":25}';//convert string into object
var person =JSON.parse(personString);
console.log(typeof person);
console.log(person);*/
const fs = require('fs');

var obj = {
    name : 'Andrew'
};
var obj2 = JSON.stringify(obj);
fs.writeFileSync('notes.json',obj2);
var note = fs.readFileSync('notes.json');
console.log(note);
obj3 = JSON.parse(note);
console.log(typeof obj3);
console.log(obj3);
function person(name,age){
    this.name=name;
    this.age=age;
}
person.prototype.celebratebirthday=function(){
    this.age++;
};
var john=new person('john',33);//create a new instance of an object constructor and then we pass the value
john.celebratebirthday();
console.log(john);

var mary=new person('mary',44);//create a new instance of an object constructor and then we pass the value
john.celebratebirthday();
console.log(mary);

//checking if both function have same prototype
console.log(john.__proto__==mary.__proto__)

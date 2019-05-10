function SuperType() {
  this.property = true;
  this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.getSuperValue = function() {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

// наследование
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
  return this.subproperty;
};

SubType.prototype.getSubValue = function() { 
  return this.subproperty; 
}; 

// переопределение существующего метода 
SubType.prototype.getSuperValue = function() { 
  return false; 
}; 

var subInstance = new SubType();
subInstance.colors.push('back');

console.log('Значение метода getSuperValue наследника - ' + subInstance.getSuperValue()); // false
console.log('Значение свойства colors наследника - ' + subInstance.colors); // red,blue,green,back

console.log('-----------------------------');

console.log(subInstance instanceof Object); // true
console.log(subInstance instanceof SuperType);  // true
console.log(subInstance instanceof SubType);  // true 

console.log('-----------------------------');

console.log(Object.prototype.isPrototypeOf(subInstance)); //true
console.log(SuperType.prototype.isPrototypeOf(subInstance));  // true
console.log(SubType.prototype.isPrototypeOf(subInstance)); // true 

console.log('-----------------------------');

var superInstance = new SuperType();
console.log('Значение метода getSuperValue оригинала - ' + superInstance.getSuperValue()); // true
// problem
console.log('Значение свойства colors оригинала - ' + subInstance.colors); // red,blue,green,back


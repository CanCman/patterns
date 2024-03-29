/**
 * Преимущества:
 * - инкапсулирует создание прототипа внутри объекта функции конструктора;
 * - нельзя передать аргументы конструктора.
 * 
 * Недостатки:
 * - ссылочные типы наследуют ссылку родителя.
 * 
 * Особенности:
 * - невозможно использовать нотацию присвоения объекта прототипу, так как теряется объект наследования.
 * 
 */
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

var subInstance2 = new SubType();
// problem
console.log('Значение свойства colors оригинала - ' + subInstance2.colors); // red,blue,green,back


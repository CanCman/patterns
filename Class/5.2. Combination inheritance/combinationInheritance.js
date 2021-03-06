/**
 * Преимущества:
 * - совмещает преимущества двух паттернов кражи конструктора и наследование прототипа.
 * 
 * Недостатки:
 * - ссылочные типы наследуют ссылку родителя.
 * 
 */
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.getName = function() {
  return this.name;
};

function SubType(name, age) {
  SuperType.call(this, name);

  this.age = age;
}

// наследование
SubType.prototype = new SuperType();

SubType.prototype.getAge = function() {
  return this.age;
}; 

var instance1 = new SubType('Dick', 5);
instance1.colors.push('back');
console.log('Первый экземпляр');
console.log('Значение метода getName - ' + instance1.getName()); // Dick
console.log('Значение метода getAge - ' + instance1.getAge()); // 5
console.log('Значение свойства colors - ' + instance1.colors); // red,blue,green,back

console.log('-----------------------------');

console.log(instance1 instanceof Object); // true
console.log(instance1 instanceof SuperType);  // true
console.log(instance1 instanceof SubType);  // true 

console.log('-----------------------------');

console.log(Object.prototype.isPrototypeOf(instance1)); //true
console.log(SuperType.prototype.isPrototypeOf(instance1));  // true
console.log(SubType.prototype.isPrototypeOf(instance1)); // true 

console.log('-----------------------------');

var instance2 = new SubType('Nick', 55);
console.log('Второй экземпляр');
console.log('Значение метода getName  - ' + instance2.getName()); // Nick
console.log('Значение метода getAge  - ' + instance2.getAge()); // 55
console.log('Значение свойства colors - ' + instance2.colors); // red,blue,green

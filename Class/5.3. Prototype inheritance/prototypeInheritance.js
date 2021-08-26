
/**
 * Преимущества:
 * - можно создавать объекты на основе существующих.
 * 
 * Недостатки:
 * - не является определением класса;
 * - использует поверхностное копирование, из чего следует, что ссылки не копируются, только примитивные типы;
 * - .
 */

// полифил Object.create
//
// function object(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }

var person = {
  name: 'Dick',
  friends: ['Shelby', 'Court', 'Van']
};


var instance1 = Object.create(person, {
  name: {
    value: 'Nick'
  }
});
instance1.friends.push('Mick');
console.log('Первый экземпляр');
console.log('Значение свойства name - ' + instance1.name); // Nick
console.log('Значение свойства friends - ' + instance1.friends); // Shelby,Court,Van,Mick

console.log('-----------------------------');

console.log(instance1 instanceof Object); // true
console.log(Object.prototype.isPrototypeOf(instance1)); //true

console.log('-----------------------------');

var instance2 = Object.create(person);
instance2.name = 'Mick';
instance2.friends.push('Dick');
console.log('Второй экземпляр');
console.log('Значение свойства name - ' + instance2.name); // Mick
console.log('Значение свойства friends - ' + instance2.friends); // Shelby,Court,Van,Mick,Dick

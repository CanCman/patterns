/**
 * Преимущества:
 * - забираем все свойства из функции конструкторы и ;
 * - устанавливаем аргументы в конструктор при краже;
 * - создаем копию свойств.
 * 
 * Минус:
 * - не позволяет пользоваться свойствами многократно, так как создаются копии всех свойств;
 * - не является наследником родителя через instanceof.
 * 
 * @param {any} name 
 * @param {any} age 
 * @param {any} job 
 */
function SuperType(property) {
  this.property = property;
  this.colors = ['red', 'blue', 'green'];
}

function SubType(property) {
  SuperType.call(this, property);

  this.subproperty = false;
}

var subInstance = new SubType();
subInstance.colors.push('back');

console.log('Значение свойства colors наследника - ' + subInstance.colors); // red,blue,green,back

console.log('-----------------------------');

console.log(subInstance instanceof Object); // true
console.log(subInstance instanceof SuperType);  // false
console.log(subInstance instanceof SubType);  // true 

console.log('-----------------------------');

console.log(Object.prototype.isPrototypeOf(subInstance)); //true
console.log(SuperType.prototype.isPrototypeOf(subInstance));  // false
console.log(SubType.prototype.isPrototypeOf(subInstance)); // true 

console.log('-----------------------------');

var superInstance = new SuperType();
console.log('Значение свойства colors оригинала - ' + superInstance.colors); // red,blue,green


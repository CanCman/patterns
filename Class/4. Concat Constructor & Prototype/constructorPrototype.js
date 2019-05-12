/**
 * Преимущества:
 * - совмещает в себе преимущества паттернов конструктора и прототипа;
 * 
 * Недостатки:
 * - разделяется код между конструктором и прототипом;
 * 
 * Особенности:
 * - невозможно использовать нотацию присвоения объекта прототипу;
 * 
 */
function Obj(name, age, job) { 
  this.name = name;
  this.age = age;
  this.job = job;
}

Obj.prototype.sayName = function() {
  return 'My name is ' + this.name;
};

var instance1 = new Obj('Dick', '5 years old', 'hardworker');

console.log(instance1.name); //Dick
console.log(instance1.age); // 5 years old
console.log(instance1.job); // hardworker
console.log(instance1.sayName()); // My name is Dick

console.log(instance1.constructor == Obj); // true

console.log(instance1 instanceof Obj); // true
console.log(instance1 instanceof Object); // true

var instance2 = new Obj('Mick', '55 years old', 'softworker');

console.log(instance2.name); // Mick
console.log(instance2.age); // 55 years old
console.log(instance2.job); // softworker
console.log(instance2.sayName()); // My name is Mick

console.log(instance1.sayName == instance2.sayName); // true

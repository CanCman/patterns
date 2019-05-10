/**
 * Преимущества:
 * - можно добавить свой метод в контруктор;
 * - можно использовать в безопасных средах;
 * 
 * Минусы:
 * - нельзя пользоваться прототипами, так как не создается ссылка на конструктор
 * - получаемый объект не экземпляр своего конструктора;
 * - функция контруктор не находится в ссылке constror объккта;
 * - избыточность при создании методов для каждого экземпляра.
 * 
 * Особенность:
 * - нельзя использовать this и new(для защиты данных от остальной части приложения).
 * 
 * @param {any} name 
 * @param {any} age 
 * @param {any} job 
 */
function Obj(name, age, job) { 
  var o = new Object();

  o.sayName = function() {
    return 'My name is ' + name;
  };

  return o;
}

var instance1 = Obj('Dick', '5 years old', 'hardworker');

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

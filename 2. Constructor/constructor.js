/**
 * Преимущества перед паттерном Factory
 * - объект явно не создается; 
 * - свойства и метод назначаются непосредственно объекту this; 
 * - инструкция return отсутствует. 
 * 
 * Происходит:
 * 1. Создание объекта.
 * 2. Назначение нового объекта переменной this конструктора (после чего this указывает на новый объект).
 * 3. Выполнение кода внутри конструктора (добавление свойств к новому объекту).
 * 4. Возвращение нового объекта.
 * 
 * Минус:
 * Избыточность при создании методов для каждого экземпляра.
 * 
 * @param {any} name 
 * @param {any} age 
 * @param {any} job 
 */
function Constructor(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    return 'My name is ' + this.name;
  };
}

var instance1 = new Constructor('Dick', '5 years old', 'hardworker');

console.log(instance1.name);
console.log(instance1.age);
console.log(instance1.job);
console.log(instance1.sayName());

console.log(instance1.constructor == Constructor); // true

console.log(instance1 instanceof Constructor); // true
console.log(instance1 instanceof Object); // true

var instance2 = new Constructor('Mick', '55 years old', 'softworker');

// problem
console.log(instance1.sayName == instance2.sayName); // false

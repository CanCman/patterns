/**
 * Преимущества перед паттерном Constructor
 * - не клнирует все методы, экономит память;
 * - динамически создаются свойства у прототипов;
 * 
 * Минус:
 * Все свойства тоже становятся общими у всех экземпляров.
 * 
 * Проблемы нотации, когда прототипу присваивается объект со свойствами:
 * - Теряется ссылка на конструктор и необходимо дописывть самому;
 * - Теряется динамическое присваивание и созданые экземпляры ссылаются на предыдущий объект;
 * 
 * Пример такой нотации:
 * Person.prototype = { 
 *    constructor: Obj,
 *    name : "Dick",
 *    age : '5 years old',
 *    job : "hardworker", 
 *    friends : ["Shelby", "Court"],
 *    sayName : function () { 
 *      return 'My name is ' + this.name;
 * } 
 * 
 * Особенности:
 * - Свойства в прототипе являются enumerable и перечисляются в цикле for...in...
 * 
 * @param {any} name 
 * @param {any} age 
 * @param {any} job 
 */
function Obj() { }

Obj.prototype.name = 'Dick';
Obj.prototype.age = '5 years old';
Obj.prototype.job = 'hardworker';
Obj.prototype.sayName = function() {
  return 'My name is ' + this.name;
}

var instance1 = new Obj();

console.log(instance1.name);
console.log(instance1.age);
console.log(instance1.job);
console.log(instance1.sayName());

console.log(instance1.constructor == Obj); // true

console.log( instance1 instanceof Obj); // true
console.log( instance1 instanceof Object); // true

var instance2 = new Obj();

// problem
console.log(instance2.name);
console.log(instance2.age);
console.log(instance2.job);
console.log(instance2.sayName());

console.log(instance1.sayName == instance2.sayName) // true
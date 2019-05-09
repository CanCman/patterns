/**
 * Преимущества:
 * - можно добавить свой метод в контруктор;
 * 
 * Минусы:
 * - получаемый объект не экземпляр своего конструктора;
 * - функция контруктор не находится в ссылке constror объккта;
 * - избыточность при создании методов для каждого экземпляра.
 * 
 * Пример использования:
 * 
 * function SpecialArray(){ 
 * 
 *   // создание массива 
 *   var values = new Array(); 
 * 
 *   // добавление значений 
 *   values.push.apply(values, arguments); 
 * 
 *   // назначение метода 
 *   values.toPipedString = function(){ 
 *      return this.join("|"); 
 *    };
 *   // возвращение массива 
 *   return values; 
 * 
 *   var colors = new SpecialArray("red", "bluе", "green"); 
 *   alert(colors.toPipedString()); // "red|blue|green" 
 * 
 * 
 * @param {any} name 
 * @param {any} age 
 * @param {any} job 
 */
function Obj(name, age, job) { 
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;

  o.sayName = function() {
    return 'My name is ' + this.name;
  };

  return o;
}

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

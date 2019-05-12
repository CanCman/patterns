/**
 * Позволяет создавать одинаковые объекты
 * Недостатки, нельзя воспользовать instanceOf
 * Просто функция, нотация с маленькой буквы.
 *
 */
function factory(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    return 'My name is ' + this.name;
  };
  return o;
}

var instance = new factory('Dick', 99, 'You know :)');
console.log(instance.name);
console.log(instance.age);
console.log(instance.job);
console.log(instance.sayName());

/** problem */
console.log(instance instanceof factory);

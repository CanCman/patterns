/**
 * Позволяет создавать одинаковые объекты
 * Минусы, нельзя воспользовать typeof
 * @param {*} name 
 * @param {*} age 
 * @param {*} job 
 */
function factory(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    return 'My name is ' + this.name;
  }
  return o;
}

var instance = new factory("Dick", "99", "You know :)");
console.log(instance.name);
console.log(instance.age);
console.log(instance.job);
console.log(instance.sayName());

/** problem */
console.log(typeof instance);




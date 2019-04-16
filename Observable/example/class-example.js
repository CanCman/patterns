class Observable {
  constructor(source) {
    this.source = source.split(''); //создаем массив из строк
    this.result = this.source;
  }

  subsrcribe(action) {
    for (let letter of this.result) {
      action(letter);
    }
  }

  filter(callbackFilter) {
    this.result = this.result.filter(callbackFilter);
    return this;
  }

  map(callback) {
    this.result = this.result.map(callback);
    return this;    
  }
}

new Observable('Observable')
  .map(letter => letter.toUpperCase())
  .filter(letter => letter === 'B')
  .subsrcribe(letter => console.log(letter))
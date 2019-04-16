
function observable(obj, action, done) {
  for (let letter of obj) {
    action(letter);
  }
  done();
}

observable('observable', letter => console.log(letter), () => console.log('done'));
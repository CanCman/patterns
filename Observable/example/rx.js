// import Rx from rxjs

const { from } = require('rxjs');
const { map, filter } = require('rxjs/operators');

from('Observable').pipe(
  map(letter => letter.toUpperCase()),
  filter(letter => letter === 'B')
).subscribe(letter => console.log(letter));
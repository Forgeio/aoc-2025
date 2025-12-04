const fs = require('fs');
let fileName = 'input.txt';
let data = fs.readFileSync(fileName, 'utf8');
let answer = 0;

const isRepeated = s => (s + s).slice(1, -1).includes(s);

data = data.split(',');

data.forEach(function(range) {
  range = range.split('-');
  const start = parseInt(range[0]);
  const end = parseInt(range[1]);

  for(let i=start; i<end + 1; i++) {
    let s = i.toString();
    if(isRepeated(s)) {
        answer += i;
    }
  }
});

console.log(answer);
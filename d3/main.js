const fs = require('fs');
const fileName = 'input.txt';
const data = fs.readFileSync(fileName, 'utf8');
const lines = data.split(/\r?\n/);
const numberSize = 12;
let answer = 0;

lines.forEach(function(line) {
  let result = "";
  let startIndex = 0;

  for (let i = 0; i < numberSize; i++) {
    let best = -1;
    let bestIndex = startIndex;

    const remaining = numberSize - i;
    const maxStart = line.length - (remaining - 1);

    for (let j = startIndex; j < maxStart; j++) {
      const n = parseInt(line[j])

      if (n > best) {
        best = n;
        bestIndex = j;
        if (best === 9) break;
      }
    }

    result += best;
    startIndex = bestIndex + 1;
  }

  console.log(result);
  answer += parseInt(result);
});

console.log(answer);

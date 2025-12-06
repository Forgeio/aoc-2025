const fs = require('fs');
const fileName = 'input.txt';
const data = fs.readFileSync(fileName, 'utf8');
const rows = data.split(/\r?\n/);
let values = [];
let answer = 0;

rows.forEach(function(row, i) {
    values[i] = [];
    for(let j = 0; j < row.length; j++) {
        values[i][j] = row[j];
        values[i] = values[i].map(num => (num === ' ' ? '0' : num));
    }
});

let operator = "";
let problem = 0;

for(i = 0; i < values[0].length; i++) {
    let x = "";
    let o = values[values.length - 1][i];
    if (o !== "0") {operator = o}

    for(j = 0; j < values.length; j++) {
        if (values[j][i] !== '0') {
            x += values[j][i];
        }
    }
    if(x !== "") {
        x = parseInt(x);
        if(problem !== 0) {
            switch(operator) {
                case "*": problem *= x; break;
                case "+": problem += x; break;
            }
        } else {
            problem = x;
        }
    } else {
        answer += problem;
        operator = "";
        problem = 0;
    }
    if(i == values[0].length - 1) {
        answer += problem;
    }
}

console.log(answer);
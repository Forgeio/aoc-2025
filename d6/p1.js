const fs = require('fs');
const fileName = 'testinput.txt';
const data = fs.readFileSync(fileName, 'utf8');
const rows = data.split(/\r?\n/);

let worksheet = [];
let final = 0;

rows.forEach(function(row, i) {
    worksheet[i] = [];
    if (row.trim()) {
        const parts = row.split(' ');
        parts.forEach(function(part, j) {
            worksheet[i][j] = part;
        })
        worksheet[i] = worksheet[i].filter(item => item !== '');
    } else {
        return;
    }
});

for(i = 0; i < worksheet[0].length; i++) {
    let answer = 0;

    for(j = 0; j < worksheet.length - 1; j++) {
        const operator = worksheet[worksheet.length - 1][i];
        const x = parseInt(worksheet[j][i]);
        if (answer !== 0) {
            switch(operator) {
                case "*": answer *= x; break;
                case "+": answer += x; break;
            }
        }
        else {
            answer = x;
        }
    }
    final += answer;
}

console.log("Final answer:", final)
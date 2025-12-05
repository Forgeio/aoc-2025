const fs = require('fs');
const fileName = 'input.txt';
const data = fs.readFileSync(fileName, 'utf8');
const rows = data.split(/\r?\n/);
let ranges = [];
let ingredients = [];
let rowData = 0;
let freshIngredients = 0;

rows.forEach(function(row, index) {
    if (!row) {
        rowData = 1;
    }

    if (rowData === 0) {
        ranges.push(row);
    }
    else {
        if (row) {
            ingredients.push(row);
        }
    }
});

const withinRange = (i, r) => {
    r = r.split('-');
    low = parseInt(r[0]);
    high = parseInt(r[1]);
    i = parseInt(i);
    if ((i >= low) && (i <= high)) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; i < ingredients.length; i++) {
    let ingredient = ingredients[i];
    for (let j = 0; j < ranges.length; j++) {
        let range = ranges[j];
        if (withinRange(ingredient, range)) {
            freshIngredients += 1;
            break;
        }
    }
}

console.log(freshIngredients);
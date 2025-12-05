const fs = require('fs');
const fileName = 'input.txt';
const data = fs.readFileSync(fileName, 'utf8');
const rows = data.split(/\r?\n/);

let ranges = [];

rows.forEach(function(row) {
    if (row.trim()) {
        const parts = row.split('-');
        if (parts.length === 2) {
            const low = parseInt(parts[0].trim());
            const high = parseInt(parts[1].trim());
            ranges.push({ low, high });
        }
    } else {
        return;
    }
});

ranges.sort((a, b) => a.low - b.low);

let mergedRanges = [];
ranges.forEach(range => {
    if (mergedRanges.length === 0 || mergedRanges[mergedRanges.length - 1].high < range.low) {
        mergedRanges.push(range);
    } else {
        mergedRanges[mergedRanges.length - 1].high = Math.max(mergedRanges[mergedRanges.length - 1].high, range.high);
    }
});

let totalElements = 0;
mergedRanges.forEach(range => {
    totalElements += range.high - range.low + 1;
});

console.log("Total elements:", totalElements);
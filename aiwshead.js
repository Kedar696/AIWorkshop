const fs = require('fs');
const path = require('path');

if (process.argv.length !== 3) {
    console.log('Missing arguments');
    console.log(`Usage: node ${path.basename(process.argv[1])} <filename>`);
    process.exit(1);
}

let filename = process.argv[2];

if (!fs.existsSync(filename)) {
    console.log(`File not found: ${filename}`);
    process.exit(1);
}

let content = fs.readFileSync(filename, 'utf-8');

let lines = content.split('\n');

for (let i = 0; i < 10 && i < lines.length; i++) {
    console.log(lines[i]);
}
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
process.stdin.on('end', () => { 
    console.log(total); 
    process.exit(0); 
});

rl.on('line', (data) => {
    total += Number(data) || 0;
});

console.log(total)
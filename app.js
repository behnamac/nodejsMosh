const os=require('os');

const freeMemory=os.freemem();
const totalMemory=os.totalmem();

console.log(`Free Memory: ${freeMemory}`);
console.log(`Total Memory: ${totalMemory}`);
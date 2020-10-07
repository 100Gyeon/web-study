// pipe로 여러 개의 스트림을 이을 수 있음

const fs = require('fs');
const readStream = fs.createReadStream('read4.txt');
const writeStream = fs.createWriteStream('write3.txt');
readStream.pipe(writeStream);
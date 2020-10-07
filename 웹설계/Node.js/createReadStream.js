const fs = require('fs');

// createReadStream 인자로 (파일 경로, 옵션 객체) 전달
const readStream = fs.createReadStream('./read3.txt', { highWaterMark : 16}); // 16바이트 단위로 data 가져옴
const data = [];

// data(chunk 전달) 이벤트 리스너
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data : ', chunk, chunk.length);
});

// end(전달 완료) 이벤트 리스너
readStream.on('end', () => {
    console.log('end : ', Buffer.concat(data).toString());
});

// error(에러 발생) 이벤트 리스너
readStream.on('error', (err) => {
    console.log('error : ', err);
});
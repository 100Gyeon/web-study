// 비동기 메서드일 때 콜백 형식으로 순서 유지하기
// 코드가 우측으로 너무 들어가는 현상 발생

const fs = require('fs');

console.log('시작');
fs.readFile('./read2.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./read2.txt', (err, data) => {
        if(err) {
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./read2.txt', (err, data) => {
            if(err) {
                throw err;
            }
            console.log('3번', data.toString());
            console.log('끝');
        });
    });
});
// 노드는 대부분의 내장 모듈 메서드를 비동기 방식으로 처리
// 비동기 : 코드의 순서와 실행 순서가 일치하지 않는 것

const { error } = require('console');
const fs = require('fs');

console.log('시작');
fs.readFile('./read2.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./read2.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./read2.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');

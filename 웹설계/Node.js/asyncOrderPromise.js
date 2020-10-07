// 비동기 메소드일 때 프로미스로 순서 유지하기

const fs = require('fs').promises;

console.log('시작');
fs.readFile('./read2.txt')
    .then((data) => {
        console.log('1번', data.toString());
        return fs.readFile('./read2.txt');
    })
    .then((data) => {
        console.log('2번', data.toString());
        return fs.readFile('./read2.txt');
    })
    .then((data) => {
        console.log('3번', data.toString());
        console.log('끝');
    })
    .catch((err) => {
        console.error(err);
    });
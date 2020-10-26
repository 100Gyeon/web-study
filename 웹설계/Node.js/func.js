// var.js와 연결되는 내용
// require(파일 경로)로 모듈의 내용 가져올 수 있음
const { odd, even } = require('./var');

function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven; // 모듈로 만들 값 지정
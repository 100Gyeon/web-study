// module.exports를 통해 모듈로 만들 값 지정
const odd = '홀수입니다';
const even = '짝수입니다';

module.exports = {
    odd,
    even,
};

// module.exports 외에도 exports로 모듈 만들 수 있음
// 위의 코드를 아래 코드로 바꿔도 동일하게 동작함
/*
exports.odd = '홀수입니다';
exports.even = '짝수입니다';
*/
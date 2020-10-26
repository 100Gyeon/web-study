let primitiveNumber = 273;

// 기본 자료형에 prototype으로 method 추가하기
// 모든 Number 객체에서 이 method 공유 가능
// Number.method로는 추가 불가능
// Number.prototype.method만 가능
Number.prototype.method = function () {
    return 'Primitive Method';
};

console.log(primitiveNumber.method());
/* 배열 구조분해 할당 */
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array; // 3번째가 비어있는 것은 버리는 값을 의미
// const [변수] = 배열;

const arr = [1, 2];
const [one, two] = array;
console.log(one); // 1
console.log(two); // 2

const arr = [1];
const [one, two = 2] = array; // two의 기본 값을 2로 설정
console.log(one); // 1
console.log(two); // 2
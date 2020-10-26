// 호이스팅(Hoisting) : Global 영역에 선언된 코드를 최상의 scope로 끌어올림

// 익명 함수가 선언적 함수를 덮어씀
a = function () { console.log("1") };
function a() { console.log("2") }; // 선언적 함수가 익명 함수보다 먼저 생성된다.
a(); // 1

/* 이 경우는 오류 발생 (let을 붙이면 block scope으로 처리된다.)

let b = function () { console.log("1번 함수") };
function b() { console.log("2번 함수") };
b();

*/

c = function () { console.log("1"); };
c = function () { console.log("2"); };
c(); // 2

function d() { console.log("1"); };
d = function () { console.log("2"); };
d(); // 2

function e() { console.log("1"); };
function e() { console.log("2"); };
e(); // 2
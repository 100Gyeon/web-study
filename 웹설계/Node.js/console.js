const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};
console.time('전체 시간');
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요');

// table로 만들어서 출력
console.table([{name: '제로', birth: 1994}, {name: 'hero', birth: 1988}]);

// 객체 로깅
console.dir(obj, { colors: false, depth: 2 }); // 색깔 없고, depth 2까지 출력
console.dir(obj, { colors: true, depth: 1 });

// 시간 로깅
console.time('시간 측정');
for(let i = 0; i < 10000; i++) {}
console.timeEnd('시간 측정');

// 호출스택 로깅
function b() {
    console.trace('에러 위치 추적');
}
function a() {
    b();
}
a();

console.timeEnd('전체 시간');

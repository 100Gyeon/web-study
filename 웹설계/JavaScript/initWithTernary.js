let test; // undefined 변수

// 삼항 연산자로 해당 변수가 undefined인지 확인하고 초기화한다.
// 아래에서 undefined 변수는 false 취급
test = test ? test : "초기화합니다_1";
console.log(test);

// 변수가 undefined일 때만 초기화
test = test ? test : "초기화합니다_2";
console.log(test);
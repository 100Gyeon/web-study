let test;

test = test || "초기화합니다1";
console.log(test);

test = test || "초기화합니다2";
console.log(test);

/* 짧은 초기화 조건문
A || B에서 A가 true라면 A로 대치
A || B에서 A가 false(undefined)라면 B로 대치 */
let array = [52, 273, 32, 64, 72];

// forEach() 메소드
// 배열의 요소를 하나씩 뽑아 반복을 돌린다.
console.log('--- forEach 메소드 ---');
array.forEach((item, index) => {
    console.log(`${index}번째 요소는 ${item}입니다.`);
});
console.log();

// map() 메소드
// 콜백 함수에서 리턴하는 것을 기반으로 새로운 함수를 만든다.
console.log('--- map 메소드 ---');
let outputA = array.map((item, index) => {
    return item * item;
});
console.log(outputA);
console.log();

// filter() 메소드
// 콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 만들어 리턴한다.
console.log('--- filter 메소드 ---');
let outputB = array.filter((item, index) => {
    return item % 2 == 0;
});
console.log(outputB);
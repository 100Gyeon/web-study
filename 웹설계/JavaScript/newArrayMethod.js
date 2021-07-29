/*
forEach() 메소드
배열의 요소를 하나씩 뽑아 반복을 돌린다.
배열의 요소들을 가지고 일괄적인 작업을 하고 싶을 때 사용
*/
let array = [52, 273, 32, 64, 72];
console.log('--- forEach 메소드 ---');
array.forEach((item, index) => {
    console.log(`${index}번째 요소는 ${item}입니다.`);
});

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
superheroes.forEach((hero) => {
    console.log(hero);
});


/*
map() 메소드
콜백 함수에서 리턴하는 것을 기반으로 새로운 함수를 만든다.
배열 안의 원소를 모두 변환하고 싶을 때 사용
*/
console.log('--- map 메소드 ---');
let outputA = array.map((item, index) => {
    return item * item;
});
console.log(outputA);
console.log();

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const squared = arr.map(n => {
//     return n * n;
// });
// 화살표 함수의 유일한 문장이 'return'일 때 'return'과 중괄호를 생략할 수 있다.
const squared = arr.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25, 36, 49, 64]


/*
filter() 메소드
콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 만들어 리턴한다.
배열에서 특정 조건을 만족하는 요소들만 추출해서 새로운 배열을 만들 때 사용
*/
console.log('--- filter 메소드 ---');
let outputB = array.filter((item, index) => {
    return item % 2 == 0;
});
console.log(outputB);

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    }
];
const taskNotDone = todos.filter(todo => !todo.done);
console.log(taskNotDone);
/*
[Object]
0 : Object
    id: 4
    text: "배열 내장함수 배우기"
    done: false
*/
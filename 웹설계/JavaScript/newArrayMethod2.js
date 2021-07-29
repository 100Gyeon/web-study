/* splice */
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 2); // index부터 2개
console.log(spliced); // [30, 40]
console.log(numbers); // [10, 20] -> 기존 배열 수정

/* slice */
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 1까지
console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40] -> 기존 배열 수정 X

/* shift */
const numbers = [10, 20, 30, 40];
const value = numbers.shift(); // shift는 첫 번째 요소를 꺼낸다.
console.log(value); // 10
console.log(numbers); // [20, 30, 40] -> 기존 배열 수정

/* pop */
const numbers = [10, 20, 30, 40];
const value = numbers.pop(); // pop은 마지막 요소를 꺼낸다.
console.log(value); // 40
console.log(numbers); // [10, 20, 30] -> 기존 배열 수정

/* unshift */
const numbers = [10, 20, 30, 40];
numbers.unshift(5); // 배열의 맨 앞에 5를 추가
console.log(numbers); // [5, 10, 20, 30, 40] -> 기존 배열 수정

/* push */
const numbers = [10, 20, 30, 40];
numbers.push(50); // 배열의 맨 뒤에 50을 추가
console.log(numbers); // [10, 20, 30, 40, 50] -> 기존 배열 수정

/* concat */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2); // 기존 배열 수정 X
console.log(concated); // [1, 2, 3, 4, 5, 6]

/* join */
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5

/* reduce */
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // accumulator의 기본 값은 0
                            // 0      ,       1
                            // 1      ,       2
                            // 3      ,       3
                            // 6      ,       4
                            // 10     ,       5
                            // 15
console.log(sum); // 15

const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((acc, current) => {
  if (acc[current]) { // if (acc['a'])
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {}); // acc의 기본 값은 비어있는 객체
console.log(counts); // {a: 3, b: 1, c: 2, d: 1, e: 1}
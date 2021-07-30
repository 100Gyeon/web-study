/* && 연산자는 왼쪽이 truthy면 결과는 오른쪽 값
               왼쪽이 falsy면 결과는 왼쪽 값 */
console.log(undefined && 'hello'); // undefined
console.log(false && 'hello'); // false
console.log(null && 'hello'); // null
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0

console.log(true && 'hello'); // hello
console.log('hello' && 'bye'); // bye
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1

const dog = {
  name: '멍멍이'
};
function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}
const name = getName(dog);
console.log(name); // 멍멍이
const name = getName();
console.log(name); // undefined

// 위의 코드를 단축할 수 있는 방법은 아래와 같다.
function getName(animal) {
  return animal && animal.name;
}


/* || 연산자는 왼쪽이 falsy면 결과는 오른쪽 값
              왼쪽이 truthy면 결과는 왼쪽 값 */
console.log('' || '가나다라'); // 가나다라
console.log(null || '마바사아') // 마바사아
console.log(undefined || 'abcd') // abcd
console.log(false || 'hello'); // hello
console.log(0 || 'zero'); // zero

console.log(1 || 'one') // 1
console.log(true || '무시'); // true
console.log('문자열' || '무시'); // 문자열
console.log([] || '배열'); // []

const namelessDog = {
  name: '',
};
function getName(animal) {
  const name = animal && animal.name;
  if(!name) {
    return '이름이 없는 동물입니다';
  }
  return name;
}
const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.

// 위의 코드를 단축할 수 있는 방법은 아래와 같다.
function getName(animal) {
  const name = name && animal.name;
  return name || '이름이 없는 동물입니다.';
} // 어떠한 값이 없을 때, 그 대신에 사용하도록 지정하고 싶을 때 사용
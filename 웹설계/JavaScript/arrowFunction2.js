/*
화살표 함수 (es6)
매개변수는 괄호 안에 작성
중괄호를 통해 함수의 바디 작성
() => {}
*/

// arrow 함수를 만들어 이름이 hello1인 변수에 할당
const hello1 = () => {
  console.log('hello1');
}

// 매개변수가 하나일 때, 괄호 생략 가능
const hello2 = name => {
  console.log('hello2', name);
}

// 매개변수가 2개일 때
const hello3 = (name, age) => {
  console.log('hello3', name, age);
}

// 함수의 리턴
const hello4 = name => {
  return `hello4 ${name}`;
}
const hello5 = name => `hello5 ${name}`;
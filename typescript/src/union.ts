// union type : A이거나 B이다.
// | 연산자를 이용해 타입을 여러 개 연결하는 방식

// any를 사용하는 경우
function getErrorAge(age: any) {
  age.toFixed(); // age의 타입이 any로 추론되기 때문에 숫자 관련된 API를 작성할 때 코드가 자동 완성되지 않는다.
  return age;
}

// union type을 사용하는 경우
function getAge(age: number | string) {
  if (typeof age === "number") {
    age.toFixed(); // 정상 동작, age의 타입이 number로 추론되기 때문에 자동완성 가능
    return age;
  }
  if (typeof age === "string") {
    return age;
  }
  return new TypeError("age must be number or string");
}

// 결론 : union type을 사용하면 타입스크립트의 이점을 살리면서 코딩할 수 있다.

// union type을 사용할 때 주의할 점
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
function introduce(someone: Person | Developer) {
  someone.name; // 정상 동작
  // someone.age; -> 타입 오류
  // someone.skill; -> 타입 오류
}
/*
  타입스크립트 관점 : introduce() 함수를 호출하는 시점에
  Person 타입이 올지, Developer 타입이 올지 알 수 없기 때문에
  어느 타입이 들어와도 오류가 안 나는 방향으로 타입 추론
  
  그래서 introduce() 함수 안에서 별도의 Type Guard를 이용하여
  타입의 범위를 좁히지 않는 이상, 공통 속성인 name만 접근 가능
*/

function introduce2(): Developer | Person {
  return { name: "Jiyeon", age: 23, skill: "typescript" };
}
const jiyeon = introduce2();
/*
  console.log(jiyeon.name) -> 접근 가능
  console.log(jiyeon.skill); -> 오류 생김
  union type에서는 공통된 속성에만 접근할 수 있기 때문
*/

/*
  Type Assertion (타입 단언)
  타입 단언 문법은 <Type>과 as Type으로 두 종류다. (후자 추천)
  타입 추론을 무시하고 개발자가 직접 타입을 지정할 수 있음
  Developer와 Person으로 각각 지정한 뒤, 콘솔에 출력하는 방식
*/
if ((jiyeon as Developer).skill) {
  const skill = (jiyeon as Developer).skill;
  console.log(skill);
} else if ((jiyeon as Person).age) {
  const age = (jiyeon as Person).age;
  console.log(age);
}
// 타입을 단언해서 skill과 age를 사용할 수 있게 되지만 가독성, 효율성 좋지 않음

/*
  Type Guard (is 키워드 사용)
  특정 타입인지 검사하는 함수를 정의
  is + 타입명을 사용하는 것이 관행 (ex. isDeveloper)
  실제 타입 검사를 하는 메소드의 리턴 타입으로 {variable} is {Type} 같은 문법을 사용해 선언
*/
function isDeveloper(target: Developer | Person): target is Developer {
  // Developer.skill이 undefined가 아니면 (즉 Developer.skill이 있다면) Developer 타입이 된다.
  return (target as Developer).skill !== undefined;
}
// Type Guard 덕분에 if문이 더 간단해짐
if (isDeveloper(jiyeon)) {
  console.log(jiyeon.skill);
} else {
  console.log(jiyeon.age);
}

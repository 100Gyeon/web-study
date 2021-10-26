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
  타입의 범위를 좁히지 않는 이상 공통 속성인 name만 접근 가능
*/

// intersection type : 여러 타입을 만족하는 하나의 타입
// & 연산자를 이용해 여러 개의 타입 정의를 하나로 합치는 방식

interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
type Capt = Person & Developer;

const me: Capt = {
  name: "jiyeon",
  age: 23,
  skill: "frontend",
};

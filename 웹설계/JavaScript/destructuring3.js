// 구조분해 할당 (=비구조화 할당) : 객체/배열로부터 속성/요소를 쉽게 꺼낼 수 있다.
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨',
  'key with space': '키에 공백이 있다면?'
};

console.log(ironMan['key with space']); // 키에 공백이 있다면?
const { name } = ironMan;
console.log(name); // 토니 스타크

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
}

// 구조분해 할당 사용 전
function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}입니다.`;
  console.log(text);
}

// 구조분해 할당 방법 1
function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
  console.log(text);
}

// 구조분해 할당 방법 2
function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
  console.log(text);
}

print(ironMan); // 아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어입니다.
print(captainAmerica); // 캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스입니다.
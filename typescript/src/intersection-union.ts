interface User {
  name: string;
}
interface Action {
  do(): void;
}

// &(and) 기호를 통해서 intersection 타입을 표현
// 여러 타입을 모두 만족하는 하나의 타입을 의미
function createUserAction(u: User, a: Action): User & Action {
  return { ...u, ...a };
}
// u라는 변수에는 2개가 합쳐진 타입이 들어가기 때문에
// name과 do를 사용할 수 있다.
const u = createUserAction({ name: "jay" }, { do() {} });

// v is Action -> 사용자 정의 Type Guard
function isAction(v: User | Action): v is Action {
  // v라는 파라미터에 do라는 속성이 있으면 Action이다.
  return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
  if (isAction(v)) {
    v.do();
  } else {
    console.log(v.name);
  }
}

// |(or) 기호를 통해서 union 타입을 표현
// x와 y에는 string 또는 number 둘 중 하나가 올 수 있다.
function compare(x: string | number, y: string | number) {
  if (typeof x === "number" && typeof y === "number") {
    return x === y ? 0 : x > y ? 1 : -1;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
  throw Error("not supported type");
}

const v1 = compare(1, 2);
const v2 = compare("1", "2");
// const v3 = compare(1, "2"); 런타임 에러

console.log([3, 2, 1].sort(compare)); // [ 1, 2, 3 ]
console.log(["a", "b", "c"].sort(compare)); // [ 'a', 'b', 'c' ]

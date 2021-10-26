interface User {
  name: string;
}
interface Action {
  do(): void;
}
// intersection type
function createUserAction(u: User, a: Action): User & Action {
  return { ...u, ...a };
}
// actor라는 변수에는 User와 Action이 합쳐진 타입이 들어가기 때문에 name과 do를 사용할 수 있다.
const actor = createUserAction({ name: "jay" }, { do() {} });

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

// union type
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

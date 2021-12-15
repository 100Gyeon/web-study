// function getSize(arr: number[] | string[] | boolean[] | object[]): number {
//   return arr.length;
// }

function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1);

const arr2 = ["1", "2", "3"];
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize<boolean>(arr3);

const arr4 = [{}, {}, { name: "Tim" }];
getSize<object>(arr4);

/* Generic을 활용해서 하나의 인터페이스만 선언하고 
각기 다른 모습의 객체들을 여러 개 만들 수 있다. */

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: "s21",
  price: 1000,
  option: "good",
};

/* extends 키워드를 사용하는 제약 조건을 추가하는 예제 */

interface Users {
  name: string;
  age: number;
}

interface Cars {
  name: string;
  color: string;
}

interface Books {
  price: number;
}

const userEx: Users = { name: "a", age: 10 };
const carEx: Cars = { name: "bmw", color: "red" };
const bookEx: Books = { price: 3000 };

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}
// userEx와 carEx에는 name이 있겠지만, 모든 매개변수에 name이 있다고 장담할 수 없음
// <T extends { name: string }> → T 타입은 name이 string인 객체를 확장한 형태라는 것을 알려준다.
// name이 없거나, name이 string이 아니라면? bookEx를 전달할 때처럼 에러가 뜬다.

showName(userEx);
showName(carEx);
// showName(bookEx);

/* 타입을 제네릭으로 파라미터화 시키기 */
function createPromise<T>(x: T, timeout: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}
createPromise(1, 100).then((v) => console.log(v));
createPromise("str", 100).then((v) => console.log(v));

/* 제네릭으로 2개 이상의 타입 파라미터를 정의할 수 있다. */
function createTuple<T, U>(v1: T, v2: U): [T, U] {
  return [v1, v2];
}
const tuple = createTuple("user1", 1000);

/* 제네릭 클래스 */
class LocalDB<T> {
  constructor(private localStorageKey: string) {}
  add(v: T) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(v));
  }
  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : null;
  }
}

interface User {
  name: string;
}

const userDB = new LocalDB<User>("user");
userDB.add({ name: "jay" });
// userDB.add('hello');는 불가능.
// 'hello' 형식의 인수는 'User' 형식의 매개 변수에 할당될 수 없습니다.
const userA = userDB.get();
userA.name;

/* 제네릭 인터페이스 */
interface DB<T> {
  add(v: T): void;
  get(): T;
}

class Database<T> implements DB<T> {
  add(v: T): void {
    throw new Error("Method not implemented.");
  }
  get(): T {
    throw new Error("Method not implemented.");
  }
}

/* 제네릭에서 조건부 타입 활용하기 */
interface Vegetable {
  v: string;
}

interface Meat {
  m: string;
}

interface Cart<T> {
  getItem(): T extends Vegetable ? Vegetable : Meat;
}

const cart1: Cart<Vegetable> = {
  getItem() {
    return {
      v: "",
    };
  },
};

cart1.getItem();

/* keyof
  key 값들을 union 형태로 받을 수 있음 */
interface IUser {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof IUser; // 'id' | 'name' | 'age' | 'gender'와 같음

const uk: UserKey = "name";
// 'id', 'name', 'age', 'gender'가 아닌 다른 경우에는 에러 발생
// const error:UserKey = "example";

/* Partial<T>
  property를 모두 optional로 바꿔줌. 그래서 일부만 사용 가능. */
let admin: Partial<IUser> = {
  id: 1,
  name: "Bob",
};

/* Required<T>
  property를 모두 필수로 만들어줌 */
let admin2: Required<IUser> = {
  id: 1,
  name: "Bob",
  age: 23,
  gender: "m",
};

/* Readonly<T>
  읽기 전용으로 바꿔줌. 수정 불가능. */
let admin3: Readonly<IUser> = {
  id: 1,
  name: "Bob",
  age: 23,
  gender: "m",
};
// 읽기 전용 속성이므로 'id'에 할당할 수 없다.
// admin3.id = 2;

/* Record<K,T> */
interface Score {
  "1": "A" | "B" | "C" | "D";
  "2": "A" | "B" | "C" | "D";
  "3": "A" | "B" | "C" | "D";
  "4": "A" | "B" | "C" | "D";
}
const score: Score = {
  1: "A",
  2: "C",
  3: "B",
  4: "D",
};

// Record<K,T>를 사용하면 위의 코드 더 깔끔하게 작성할 수 있음
// Grades를 key로 사용하고 Scores를 Type으로 사용
type Grades = "1" | "2" | "3" | "4";
type Scores = "A" | "B" | "C" | "D" | "F";
const score2: Record<Grades, Scores> = {
  1: "D",
  2: "C",
  3: "B",
  4: "F",
};

// Record<K,T> 활용해서 적절한 값이 입력되었는지 체크하는 함수를 작성할 수 있음
function isValid(user: IUser) {
  const result: Record<keyof IUser, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
    gender: user.gender === "m" || user.gender === "f",
  };
  return result;
}

/* Pick<T,K>
  T Type에서 K property만 골라서 사용할 수 있음 */
const admin4: Pick<IUser, "id" | "name"> = {
  id: 2,
  name: "Bob",
};

/* Omit<T,K>
  T Type에서 K property만 생략해서 사용할 수 있음 (Pick<T,K>와 반대) */
const admin5: Omit<IUser, "age" | "gender"> = {
  id: 3,
  name: "Bob",
};

/* Exclude<T1,T2>
  Omit<T,K>와 비슷
  T1에서 T2를 제외하고 사용하는 방식 */
type Type1 = string | number | boolean;
type Type2 = Exclude<Type1, number | string>;

/* NonNullable<Type>
  null, undefined를 제외한 타입을 생성 */
type Type3 = string | null | undefined | void;
type Type4 = NonNullable<Type3>;
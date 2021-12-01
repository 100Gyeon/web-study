/*
  Item<T>
  1) T가 string이면 StringContainer
  2) T가 number면 NumberContainer
  3) 둘 다 아니면 사용 불가
*/
interface StringContainer {
  value: string;
}

interface NumberContainer {
  value: number;
}

type Item<T> = {
  id: T extends string | number ? T : never;
  container: T extends string
    ? StringContainer
    : T extends number
    ? NumberContainer
    : never;
};

const item: Item<string> = {
  id: "id",
  container: { value: "value" },
};

const item2: Item<number> = {
  id: 123,
  container: { value: 456 },
};

// Error
// const item3: Item<boolean> = {
//   id: true,
//   container: null
// }

/* ArrayFilter<T> */
type ArrayFilter<T> = T extends any[] ? T : never;
type StringOrNumbers = ArrayFilter<string | number | string[] | number[]>;
// type StringOrNumbers = string[] | number[];

/* 내장 conditional types */
// type Exclude<T, U> = T extends U ? never : T;
// type Extract<T, U> = T extends U ? T : never;
type T1 = Exclude<1 | 3 | 5 | 7, 1 | 5 | 9>; // type T1 = 3 | 7
type T2 = Exclude<string | number | (() => void), Function>; // type T2 = string | number
type T3 = Extract<1 | 3 | 5 | 7, 1 | 5 | 9>; // type T3 = 1 | 5

/* Flatten<T> */
type Flatten<T> = T extends any[]
  ? T[number]
  : T extends object
  ? T[keyof T]
  : T;

const numbers = [10, 20, 30];

type ArrayFlattened = Flatten<typeof numbers>;

const studyGroup = {
  name: "TAWICE",
  weeks: 7,
  isStudying: true,
};

type ObjectFlattened = Flatten<typeof studyGroup>;

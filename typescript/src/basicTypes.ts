let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;

numValue = 3;
stringValue = "hello"; // 개행 시 에러 발생
stringValue = `hello
${1 + 1}
hi
`;
booleanValue = true;

undefinedValue = null;
undefinedValue = undefined;

objValue = { name: "jay" };
objValue = new String("hello");

symbolValue = Symbol();

let nameList: string[];
nameList = ["1", "3"];
nameList.push("hello");

// name과 score를 속성으로 갖는 객체만 할당할 수 있는 변수
let user1: { name: string; score: number };
user1 = {
  name: "jay",
  score: 30,
};

// type이 number와 string인 2개 항목으로만 구성된 배열을 정의
let tuple2: [number, string];
tuple2 = [1, "2"];

let tuple3: [number, number, number];
// tuple3 = [1, "2", 3];은 "2" 때문에 에러

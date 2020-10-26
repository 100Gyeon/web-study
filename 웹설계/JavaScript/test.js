/* JavaScript Basics */

console.log(`올해는 ${new Date().getFullYear()}년 입니다.`); // 템플릿 스트링

let hours = (new Date()).getHours();
console.log(hours < 3 || 8 < hours);
console.log(hours < 3 && 8 > hours);

let pi = 3.14159265;
let radius = 10;
console.log(`둘레: ${2 * pi * radius}`);
console.log(`넓이: ${pi * radius * radius}`);

console.log(Number("52"));
console.log(Number("52.273"));
console.log(Number("true")); // 1
console.log(Number("false")); // 0
console.log(Number("안녕하세요")); // NaN

let nan = Number("안녕하세요"); // NaN 변수
console.log(nan == nan); // NaN끼리 비교하면? 무조건 다름
console.log(nan != nan); // true
console.log(isNaN(nan)); // isNaN() 함수로 NaN인지 확인(true)

let n = Number("NaN 변수");
let undefinedVariable; // undefined
/* 0, NaN, "", null, undefined는 모두 false*/
console.log(Boolean(0));
console.log(Boolean(n));
console.log(Boolean("")); // 빈 문자열
console.log(Boolean(null));
console.log(Boolean(undefinedVariable));

/* 계산식 내에 문자열 존재하면, 다 문자열로 변환된다. */
console.log(52 + 273);
console.log("52" + 273); // 합이 아니라 문자열
console.log(52 + "273"); // 합이 아니라 문자열
console.log("52" + "273");

/* 연산자 +의 경우, 문자열이나 boolean값을 숫자로 자동 형변환 */
const x = 1;
const y = -1;
console.log(+x); // 1
console.log(+y); // -1
console.log(+''); // 0
console.log(+true); // 1
console.log(+false); // 0
console.log(+'hello'); // NaN (hello는 숫자로 변환될 수 없기 때문)

/* 비교 연산자와 일치 연산자의 차이 */
console.log(`52 == "52": ${52 == "52"}`); // true
console.log(`52 === "52": ${52 === "52"}`); // false
console.log();
console.log(`0 == "": ${0 == ""}`); // true
console.log(`0 === "": ${0 === ""}`); // false
// ==는 형 변환을 수행한 후 NaN, -0, +0을 처리
// ===는 자료형까지 검사
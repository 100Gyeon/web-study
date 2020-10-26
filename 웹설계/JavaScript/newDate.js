/* Date 객체는 get__() 형태 메소드와 set__() 형태 메소드 활용 가능 */

// 현재 시간을 기반으로 Date 객체 생성
let dateA = new Date();
console.log(dateA);
// 현재 시간에 1년, 11개월, 3일을 더해 출력
dateA.setFullYear(dateA.getFullYear() + 1);
dateA.setMonth(dateA.getMonth() + 11);
dateA.setDate(dateA.getDate() + 3);
console.log(dateA);

// 유닉스 타임
let dateB = new Date(692281800000);
console.log(dateB);

// 문자열을 기반으로 한 Date 객체
let dateC = new Date("December 9, 1991 21:30:00");
console.log(dateC);

// 시간 요소(년, 월-1, 일, 시간, 분, 초, 밀리초) 기반으로 Date 객체 생성
// 월은 0부터 시작하므로 12-1이 12월과 같다.
let dateD = new Date(1991, 12 - 1, 9, 21, 30, 0, 0);
console.log(dateD);

// 시간 간격 구하기
// 두 개의 시간을 빼고, 일 단위로 나누어 시간 간격을 구함
// Math.floor : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
// Math.floor(5.95) = 5
// Math.floor(5.05) = 5
// Math.floor(-5.05) = -6
let now = new Date();
let before = new Date('December 9, 1991');
let interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));
console.log(`태어나고 ${interval}일 지났습니다.`);
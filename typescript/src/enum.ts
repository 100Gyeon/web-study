// 열거형은 상수들의 집합을 정의할 때 사용
// 특정한 상수들의 집합에 이름을 부여
enum StarbucksGrade {
  WELCOME = 0,
  GREEN = 1, // 이런 식으로 숫자까지 써줘야 더 안전
  GOLD, // 2
  VIP = "VIP", // enum 값으로 문자열도 가능
  // 하지만 이 방식을 권고하지 않음 -> 최대한 같은 타입으로 이루어진 enum 사용할 것
}

// 회원 등급별로 discount 값을 구하는 함수
function getDiscount(v: StarbucksGrade): number {
  switch (v) {
    case StarbucksGrade.WELCOME:
      return 0;
    case StarbucksGrade.GREEN:
      return 5;
    case StarbucksGrade.GOLD:
      return 10;
  }
}

console.log(getDiscount(StarbucksGrade.GREEN)); // 5
console.log(StarbucksGrade["0"]); // WELCOME
console.log(StarbucksGrade["VIP"]); // VIP
console.log(StarbucksGrade);
/*
{
  '0': 'WELCOME',
  '1': 'GREEN',
  '2': 'GOLD',
  WELCOME: 0,
  GREEN: 1,
  GOLD: 2,
  VIP: 'VIP'
}
*/

// Reverse Mapping은 숫자형 enum에만 존재하는 특징
// enum의 키(key)로 값(value)을 얻을 수 있고, 값(value)으로 키(key)를 얻을 수도 있다.
console.log(StarbucksGrade["1"]); // GREEN
console.log(StarbucksGrade.GREEN); // 1

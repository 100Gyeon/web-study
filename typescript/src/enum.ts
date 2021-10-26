// 열거형은 상수들의 집합을 정의할 때 사용
// 특정한 상수들의 집합에 이름을 부여
enum StarbucksGrade {
  WELCOME = 0,
  GREEN = 1, // 이런 식으로 숫자까지 써줘야 더 안전
  GOLD, // 2
  VIP = "VIP", // enum 값으로 문자열도 가능
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
console.log(StarbucksGrade.GREEN); // 1
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

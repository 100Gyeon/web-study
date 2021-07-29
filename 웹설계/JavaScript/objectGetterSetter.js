const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum); // 3
numbers.a = 5; // setter 함수 실행, calculate 출력
numbers.b = 7; // setter 함수 실행, calculate 출력
numbers.a = 9; // setter 함수 실행, calculate 출력
console.log(numbers.sum); // 16
// 조회할 때마다 계산하는 것이 아니라, 값이 바뀔 때마다 계산
// 계산해둔 값을 재사용
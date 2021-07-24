// 클래스는 2가지 방식으로 만들 수 있다.
// 1. 선언적 방식
class A {}
console.log(new A());
// 2. class 표현식을 변수에 할당
const B = class {};
console.log(new B());


// constructor 메서드는 class로 생성된 객체를 생성하고 초기화
class A {}
console.log(new A());
class B {
  constructor() {
    console.log('constructor');
  }
}
console.log(new B());
class C {
  constructor(name, age) {
    console.log('constructor', name, age);
  }
}
console.log(new C('Mark', 37));


// 멤버 변수
class A {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
console.log(new A('Mark', 37));

class B {
  name;
  age;
}
console.log(new B());

class C {
  name = 'no name';
  age = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
console.log(new C('Mark', 37));


// 멤버 함수
class A {
  hello1() {
    console.log('hello1', this);
  }
  hello2 = () => {
    console.log('hello2', this);
  };
}
new A().hello1(); // hello1 A { hello2: [Function: hello2] }
new A().hello2(); // hello2 A { hello2: [Function: hello2] }

class B {
  name = 'Mark';
  hello() {
    console.log('hello', this.name);
  }
}
new B().hello();
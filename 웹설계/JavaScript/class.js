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


// get, set
class A {
  _name = 'no name';

  get name() {
    return this._name + '@@@';
  }

  set name(value) {
    this._name = value + '!!!';
  }
}
const a = new A();
console.log(a); // A { _name: 'no name' }
a.name = 'Mark';
console.log(a); // A { _name: 'Mark!!!' } 
console.log(a.name); // Mark!!!@@@
console.log(a._name); // Mark!!!

// read only
class A {
  _name = 'no name';

  get name() {
    return this._name + '@@@';
  }
}
const b = new B();
console.log(b); // B { _name: 'no name' }
b.name = 'Mark';
console.log(b); // setter 함수가 없기 때문에 이것도 B { _name: 'no name' }


// static 변수, 함수
class A {
  static age = 37;
  static hello() {
    console.log(A.age);
  }
}
console.log(A, A.age);
A.hello();

class B {
  age = 37;
  static hello() {
    console.log(this.age);
  }
}
console.log(B, B.age); // [Function: B] undefined
B.hello(); // undefined
new B().hello(); // error : hello()는 객체에 속해있는 함수가 아니기 때문


// 상속 기본
class Parent {
  name = 'Lee'; // 멤버 변수
  hello() { // 멤버 함수
    console.log('hello', this.name);
  }
}

class Child extends Parent {

}

const p = new Parent();
const c = new Child();
console.log(p, c); // Parent { name: 'Lee' } Child { name: 'Lee' }
c.hello(); // hello Lee -> 부모의 함수를 자식이 그대로 실행
c.name = 'Anna';
c.hello(); // hello Anna -> 바뀐 name으로 문자열 출력

// 변수, 함수 추가 및 오버라이딩
// 자식이 부모를 덮어씀
class Parent {
  name = 'Lee';
  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {
  age = 37;
  hello() {
    console.log('hello', this.name, this.age);
  }
}

const p = new Parent();
const c = new Child();
console.log(p, c); // Parent { name: 'Lee' } Child { name: 'Lee', age: 37 }
c.hello(); // hello Lee 37
C.name = 'Anna';
c.hello(); // hello Anna 37


// super : 자식이 constructor에서 무언가를 추가하고자 할 때, super를 꼭 호출해야 함
class Parent {
  name;
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {
  age;
  constructor(name, age) {
    super(name); // 중요
    this.age = age;
  }
  hello() {
    console.log('hello', this.name, this.age);
  }
}

const p = new Parent('Mark');
const c = new Child('Mark', 37);
console.log(p, c); // Parent { name: 'Mark' } Child { name: 'Mark', age: 37 }
c.hello(); // hello Mark 37


// static 상속
class Parent {
  static age = 37;
}
class Child extends Parent {

}
console.log(Parent.age, Child.age); // 37 37
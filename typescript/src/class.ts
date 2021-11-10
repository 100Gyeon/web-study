// 인터페이스(interface)는 클래스에서 구현 부분이 빠진 타입으로 이해하면 된다.
// interface에 사용할 속성 및 method를 선언
interface Human {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirement: string): string;
}

// class에서 implements를 사용하여 interface를 구현
class AmericanProgrammer implements Human, Programmer {
  constructor(public name: string) {}

  say(message: string): void {
    console.log(message);
  }

  writeCode(requirement: string): string {
    console.log(requirement);
    return "requirement : " + requirement;
  }

  loveApple() {
    console.log("Apple");
  }
}

// 인스턴스 생성
const tony = new AmericanProgrammer("tony");

// 추상 클래스를 정의할 때는 class 앞에 abstract라고 표기
abstract class Korean implements Human {
  public abstract residentRegistration: number;

  constructor(public name: string) {}

  say(message: string): void {
    console.log(message);
  }

  // 추상 메소드는 정의만 있을 뿐 몸체(body)가 구현되어 있지 않다.
  // 추상 클래스를 상속하는 클래스는 추상 클래스에 정의된 메서드를 반드시 구현해야 한다.
  abstract joinSopt(): void;
}

// 클래스 ⟸ 추상 클래스 상속
class KoreanProgrammer extends Korean implements Programmer {
  constructor(public name: string, public residentRegistration: number) {
    super(name);
  }

  say(message: string): void {
    console.log(message);
  }

  writeCode(requirement: string): string {
    console.log(requirement);
    return "요구사항 : " + requirement;
  }

  // 추상 클래스에 정의된 추상 메서드 구현
  joinSopt(): void {
    console.log("29th Web part");
  }
}

// 인스턴스 생성
const gildong = new KoreanProgrammer("gildong", 123456);

// const gildong = new Korean('gildong');
// 추상 클래스는 말 그대로 추상이므로 클래스와 달리 인스턴스를 생성하지 않는다.
// 생성 구문을 사용하면 오류가 발생한다.

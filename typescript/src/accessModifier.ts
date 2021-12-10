class Car {
  public name: string = "sonata";
  // private name: string = "sonata";
  // #name: string = "sonata";
  // protected name: string = "sonata";

  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
    console.log(this.name);
    // console.log(this.#name);
  }
}

class Hyundai extends Car {
  constructor(color: string) {
    super(color);
  }
  showName() {
    // name이 private일 때는 자식 클래스 내부에서 사용할 수 없음
    console.log(super.name);
    // console.log(this.#name);
  }
}

// protected일 때 아래 myCar.name 확인해 보기
// 자식 클래스 내부에서는 참조할 수 있지만,
// 클래스 인스턴스로는 접근할 수 없음
const myCar = new Hyundai("black");
console.log(myCar.name);

/* 생성자에서의 접근 제한자 활용 */

// 활용 전
class Book1 {
  title;
  author;
  pages;

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.init();
  }

  static create() {}

  init() {}
}

// 활용
class Book2 {
  // 여기서 따로 선언 x

  // 접근 제한자가 선언된 생성자 파라미터들은 클래스 프로퍼티로 선언된다.
  constructor(
    public title: string,
    protected author: string,
    private pages: number
  ) {
    // 심지어 아래 4줄 없어도 자동으로 초기화가 수행된다.
  }

  static create() {}

  init() {}
}
// 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언되고
// 생성자 내부에서 별도의 초기화 없어도 암묵적으로 초기화가 수행된다.

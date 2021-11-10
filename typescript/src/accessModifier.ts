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

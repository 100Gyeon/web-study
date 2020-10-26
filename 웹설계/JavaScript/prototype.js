// 생성자 함수
// 생성자 함수로 만든 객체는 프로토타입 공간에 지정한 메소드 공유 가능
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// 프로토타입 : 메소드를 저장하는 공간
// 프로토타입에 메소드 선언
Product.prototype.print = function () {
    console.log(this.name + "의 가격은 " + this.price + "원입니다.");
}

// 객체 생성
let product1 = new Product("바나나", 1200);
let product2 = new Product("사과", 1500);
let product3 = new Product("망고", 2000);

// 메소드 호출 (모든 객체가 메소드 공유)
product1.print();
product2.print();
product3.print();
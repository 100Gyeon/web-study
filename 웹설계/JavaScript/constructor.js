// 생성자 함수 : 객체를 만들어서 return해주는 함수
// 대문자로 시작하는 이름 사용
// 만들어줄 객체의 이름이 곧 함수의 이름
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// 객체 생성 (new가 없으면 undefined가 리턴된다.)
let product = new Product("바나나", 1200);
console.log(product);
// 객체는 중괄호 사용해서 선언
let product = {
    // key: value
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀'
};

let object = {
    name: '바나나',
    price: 1200
};

console.log(product); // key와 value 전체 출력
console.log(product.제품명);
console.log(product['유형']);

console.log(object.name);
console.log(object['price']); // object.price랑 똑같음
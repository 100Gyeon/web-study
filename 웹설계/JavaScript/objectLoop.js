// 객체 선언
let object = {
    name: '바나나',
    price: 1200
};

// 배열은 순서가 있는 iterable (for ... of)
// 객체는 순서가 없는 enumerable (for ... in)
// for in 반복문을 통해 객체에 반복문을 적용
for(let key in object){
    console.log(`${key}: ${object[key]}`);
}

let obj = {
    'name': 'apple',
    'price': 1500
}
for(let key in obj) {
    console.log(key + " : " + obj[key]);
}
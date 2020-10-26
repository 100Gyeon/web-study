let object = {
    name: '바나나',
    price: 1200,
    print: function () {
        console.log(this.name + '의 가격은 ' + this.price + '원입니다.');
    }
};

// 메소드 : 객체의 속성 중 자료형이 함수인 속성
object.print(); // 메소드 호출
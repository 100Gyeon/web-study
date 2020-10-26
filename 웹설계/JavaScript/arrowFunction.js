// add1~4는 같은 기능을 하는 함수
function add1(x, y) {
    return x + y;
}
const add2 = (x, y) => {
    return x + y;
}
const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);

// not1,2도 같은 기능을 하는 함수
// 매개변수가 하나일 때 괄호 생략 가능
function not1(x) {
    return !x;
}
const not2 = x => !x;


var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    // logFriends 메소드
    logFriends: function () {
        var that = this;
        // this는 relationship1을 가리키고 있음
        // that이라는 중간 변수 이용

        // forEach는 friends라고 하는 배열에 있는 값 각각 하나씩에 대해서
        // forEach 내부에 정의되어 있는 함수를 수행해준다.
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
            // nero, hero, xero는 매개변수로 넘어왔는데 name의 경우에는 넘어오고 있지 않다.
            // 그래서 that.name 사용
        });
    },
};
relationship1.logFriends();

// 위에서 익명함수 사용한 것을 화살표 함수로
const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
        // 화살표 함수는 자신을 포함하는 함수의 this를 물려받음
        // 그래서 that 필요 없음
    },
};
relationship2.logFriends();
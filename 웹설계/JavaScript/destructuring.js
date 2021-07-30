/* 객체 구조분해 할당 */
var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};

// candyMachine부터 시작해서 속성을 찾아 들어가야 함
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// 위의 방법 대신 const { 변수 } = 객체;로 객체 구조분해 할당
const { getCandy, status: { count } } = candyMachine;

console.log(getCandy);
console.log(count);

// 다른 예제
const deepObject = {
    state: {
        information: {
            name: 'Mark',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
};

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
    // 특정 객체를 만들 때, 특정 키 이름으로 선언된 값이 이미 있다면 value 값 설정을 생략해도 된다.
    name, // name: name에서 value를 생략한 형태
    languages,
    value
};
console.log(extracted); // {name: "Mark", languages: Array(3), value: 5}
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

// const { 변수 } = 객체;
const { getCandy, status: { count } } = candyMachine;
console.log(getCandy);
console.log(count);

/* 배열도 구조분해 할당 가능 */
const array = ['nodejs', {}, 10, true];
// 3번째가 비어있는 것은 버리는 값을 의미
const [node, obj, , book] = array; // const [변수] = 배열;

console.log(node);
console.log(obj);
console.log(book);
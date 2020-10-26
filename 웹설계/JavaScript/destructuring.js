/* 구조분해 할당 */
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

console.log(getCandy);
console.log(count);
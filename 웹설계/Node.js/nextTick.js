setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));

// nextTick, promise, timeout, immediate 순서대로 출력된다.
// 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선적으로 처리함
// 비슷한 경우로 promise가 있음

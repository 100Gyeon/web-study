/* 한 promise에 .then을 여러 개 추가한 경우 */

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});
promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
});
promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
});
promise.then(function(result) {
    console.log(result); // 1
    return result * 2;
});

// promise 하나에 여러 개의 handler를 등록한 상황
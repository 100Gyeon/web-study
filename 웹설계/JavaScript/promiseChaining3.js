/* 1초 간격으로 순차적 수행 */

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // 1초 기다림
}).then(function(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000); // 또 1초 기다림
    });
}).then(function(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000); // 또 1초 기다림
    });
}).then(function(result) {
    console.log(result);
});
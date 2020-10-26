// global 속성에 값을 대입하면 다른 파일에서도 사용 가능
const A = require('./globalA');
global.message = '안녕하세요';
console.log(A());
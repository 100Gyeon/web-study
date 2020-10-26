console.log('require가 가장 위에 오지 않아도 됩니다.');
// 필요한 부분에서 require(파일 경로) 해서 쓰면 된다.

module.exports = '저를 찾아보세요.';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache); // 처음으로 require한 모듈에 대한 캐싱 정보 들어있음
console.log('require.main입니다.')
console.log(require.main === module); // 노드 실행 시 첫 모듈을 가리킴
console.log(require.main.filename);
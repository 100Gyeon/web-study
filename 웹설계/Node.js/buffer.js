const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from() :', buffer);
console.log('length :', buffer.length); // 위에 있는 글자의 길이가 아님, 바이트 단위
console.log('toString() :', buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat() :', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc() :', buffer3);

// from(문자열) - 문자열을 버퍼로 바꿀 수 있다.
// toString(버퍼) - 버퍼를 문자열로 바꿀 수 있다.
// concat(배열) - 배열 안에 든 버퍼들을 하나로 합칠 수 있다.
// alloc(바이트) - 인자로 지정한 바이트 크기의 빈 버퍼가 생성된다.

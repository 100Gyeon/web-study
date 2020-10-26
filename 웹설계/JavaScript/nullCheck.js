let zeroNumber = 0;
let falseBoolean = '';
let emptyString = '';
let undefinedValue;
let nullValue = null;

// 아예 값이 없는 상태를 구분할 때 null을 활용
if(zeroNumber == null)
    console.log('0은 존재하지 않는 값입니다.');
if(falseBoolean == null)
    console.log('false은 존재하지 않는 값입니다.');
if(emptyString == null)
    console.log('빈 문자열은 존재하지 않는 값입니다.');
if(undefinedValue == null)
    console.log('undefined는 존재하지 않는 값입니다.');
if(nullValue == null)
    console.log('null은 존재하지 않는 값입니다.');
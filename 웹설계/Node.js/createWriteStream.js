const fs = require('fs');

const writeStream = fs.createWriteStream('./write2.txt');

// 이벤트 리스너
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
});

// 실제 write는 여기서 이루어진다. write로 chunk 입력
writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.');

// end로 스트림 종료
writeStream.end();
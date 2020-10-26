const exec = require('child_process').exec;

// exec는 단순한 출력물 처리
var process = exec('dir');

process.stdout.on('data', function (data) {
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function (data) {
    console.error(data.toString());
}); // 실행 에러
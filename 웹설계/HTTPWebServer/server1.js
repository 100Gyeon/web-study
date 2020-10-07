const http = require('http');
http.createServer((req, res) => {
    // res 메서드로 응답 보냄
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>'); // write로 응답 내용 적음
    res.end('<p>Hello Server!</p>'); // end로 응답 마무리
})
    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다!');
    }); // listen(포트) 메서드로 특정 포트에 연결

// 스크립트를 실행하면 8080 포트에 연결된다.
// localhost:8080 또는 http://127.0.0.1:8080에 접속
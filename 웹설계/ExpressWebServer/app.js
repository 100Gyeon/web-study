const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000); // 서버가 실행될 포트 지정

// http://localhost:3000/
app.get('/', (req, res) => {
    // www.ssu.ac.kr이라고 가정할 때 그 뒤에 /만 하나 더 붙은 상태(즉, www.ssu.ac.kr/)
    // url 뒷부분과 관련된 내용
    // res.send('Hello, Express'); // 루트 경로에 접속했을 때는 문자열을 send

    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
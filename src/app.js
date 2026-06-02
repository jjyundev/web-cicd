const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('테스트 서버가 열렸습니다!');
});

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
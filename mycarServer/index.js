import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { carThumbnails } from './carInfo.js';
import carDetailModels from './carDetailModel.js';

const app = express();
const port = 3000; // 사용할 포트 번호

app.use(cors());
app.use(bodyParser.json());

// 기본 라우트 설정
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/carThumbnails', (req, res) => {
  res.send(carThumbnails);
})

app.get('/carDetailModels', (req, res) => {
  res.send(carDetailModels);
})

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
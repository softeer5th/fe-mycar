import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { carThumbnails } from './carInfo.js';
import carDetailModels from './carDetailModel.js';
import { carColorList } from './carColors.js';

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
});

app.get('/carDetailModels/:modelName', (req, res) => {
  // Path parameter 가져오기
  const { modelName } = req.params;

  // carDetailModels 배열 필터링
  const filteredModels = carDetailModels.find((model) => model.carName === modelName);

  // 결과 반환
  if (filteredModels) {
    res.status(200).send(filteredModels);
  } else {
    res.status(404).send({ message: 'Model not found' });
  }
});

app.get('/carColorList', (req, res) => {
  res.send(carColorList);
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});

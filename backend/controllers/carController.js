const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data.json');

// 파일에서 데이터를 읽고, 쓰는 함수들
const readData = () => {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

// 사용자 데이터 가져오기
exports.getCars = (req, res) => {
  const cars = readData();

  res.status(200).json(cars);
};
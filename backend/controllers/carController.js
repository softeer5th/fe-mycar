const cars = require('../data/cars.json');

// 사용자 데이터 가져오기
exports.getCars = (req, res) => {
  res.status(200).json(cars);
};
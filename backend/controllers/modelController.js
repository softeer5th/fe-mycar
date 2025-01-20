const fs = require("fs").promises;
const path = require("path");
const dataPath = path.join(__dirname, "../data/models.json");

// 파일에서 데이터를 읽고, 쓰는 함수들
const readData = async () => {
    const data = await fs.readFile(dataPath, "utf-8");
    return JSON.parse(data);
};

function loadImage() {

}

async function processing(model) {
    const {img, options} = model;

    const thumbnailPath = path.join('/Users/admin/Desktop/fe-mycar/backend', '/images/models', img);

    try {
        // 이미지 파일을 비동기적으로 읽고, base64로 인코딩
        const imageBuffer = await fs.readFile(thumbnailPath);
        const base64Image = imageBuffer.toString('base64');
    
        // 클라이언트에 base64 이미지 전달
        return ({
          img: `data:image/png;base64,${base64Image}`
        });
      } catch (error) {
        console.error('Error reading image:', error);
      }
}

// 사용자 데이터 가져오기
exports.getModels = async (req, res) => {
    const cars = await readData();

    const models = cars.models;

    const thumbnails = models.forEach(async (el) => await processing(el));
    console.log(thumbnails)

    res.status(200).json(cars);
};

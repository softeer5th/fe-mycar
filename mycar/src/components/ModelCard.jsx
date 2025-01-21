export default function ModelCard({ carModel }) {
  const optionImageList = [
    "https://www.hyundai.com/contents/vr360/CN17/trim/RB-USP-001.png",
    "https://www.hyundai.com/contents/vr360/CN17/trim/RB-USP-002.png",
    "https://www.hyundai.com/contents/vr360/CN17/trim/RB-USP-003.png"
  ]
  return (
    <div className="flex flex-col bg-thirdary p-6">
      <div className=" text-xl font-bold">{carModel.modelName}</div>
      <div className=" text-lg font-bold">{carModel.price}</div>
      <img className=" mt-10" src={carModel.imageSrc} />
      <div className=" w-full flex justify-around my-10">
        {optionImageList.map((optionImage, i) => {
          return (
            <img key={i} 
            className=" w-1/4"
            src={optionImage} />
          )
        })}
      </div>
      <button className=" bg-buttonBlue  text-white font-normal py-3 ">내 차 만들기</button>
    </div>
  )
}
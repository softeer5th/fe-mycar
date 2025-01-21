export default function ModelCard({ carModel }) {
  const optionImageList = [
    "https://www.hyundai.com/contents/vr360/CN17/trim/RB-USP-001.png",
    "https://www.hyundai.com/contents/vr360/CN17/trim/RB-USP-002.png",
    "https://www.hyundai.com/contents/vr360/CN17/trim/RB-USP-003.png"
  ]
  return (
    <div className="flex flex-col">
      <div className="">{carModel.modelName}</div>
      <div className="">{carModel.price}</div>
      <img className="" src={carModel.imageSrc} />
      <div className="flex">
        {optionImageList.map((optionImage, i) => {
          return (
            <img key={i} src={optionImage} />
          )
        })}
      </div>
      <button className="">내 차 만들기</button>
    </div>
  )
}
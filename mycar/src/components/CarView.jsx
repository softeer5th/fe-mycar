export default function CarView({carName, selectedModel: {modelName, price, imageSrc}}) {
  return (
    <div className="flex-1 flex-col h-full">
      <h1 className="">{`${carName}-${modelName}`}</h1>
    </div>
  )
}
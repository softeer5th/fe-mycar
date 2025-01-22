import CarOptionList from "./CarOptionList";
import CarView from "./CarView";

export default function CarEditor({selectedModel}) {
  return (
    <div className="w-full flex bg-cyan-400" style={{height: '3000px'}}>
      <CarView carName={'투싼'} selectedModel={selectedModel} />
      <hr className="h-full" style={{width: '1px'}}/>
      <CarOptionList selectedModel={selectedModel}/>
    </div>
  )
}
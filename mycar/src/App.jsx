import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModelSelect from './components/ModelSelect'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='h-dvh w-dvw min-w-96' >
      <header className='h-2/5 bg-primary p-10 pb-0'>
        <div className='w-full h-full bg-secondary flex flex-col justify-center items-center gap-8'>
          <h1 className='text-6xl font-bold'>내 차 만들기</h1>
          <h1 className='text-base font-normal'>내가 타고 싶은 나만의 차를 만들어 보세요.</h1>
        </div>
      </header>
      <main className='h-full w-full flex flex-col items-center'>
        <ModelSelect />
        <hr className='h-1 w-full'></hr>
      </main>
    </div>
  )
}

export default App

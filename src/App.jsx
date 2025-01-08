import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/navbar'
import Animation from './undsenHeseg/animation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full  '>
      <Navbar/>
      <Animation/>
    </div>
  )
}

export default App

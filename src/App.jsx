import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/navbar'
import Animation from './undsenHeseg/animation'
import Event from './createEvent/Event'
import Songoltuud from './songoltuud/songoltuud'
import Cards from './togsgolHeseg/cards'
import Tekst from './togsgolHeseg/tekst'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full  '>
      <Navbar/>
      <Animation/>
      <Event/>
      <Songoltuud/>
      <Tekst/>
      <Cards/>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Component.jsx/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './assets/Component.jsx/State'
import Counterapp from './assets/Component.jsx/Counterapp'
import Displayname from './assets/Component.jsx/Displayname'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     
      <Routes>
        <Route path='/use' element={<State/>}></Route>
        <Route path='/c' element={ <Counterapp/>}></Route>
        <Route path='/d' element={ <Displayname/>}></Route>
      </Routes>
    </>
  )
}

export default App

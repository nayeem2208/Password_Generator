import { useState } from 'react'
import Routers from './Routes'
import Header from './components/header'

function App() {


  return (
    <div  className='h-full min-h-screen bg-black'>
    <Header/>
     <Routers/>
    </div>
  )
}

export default App

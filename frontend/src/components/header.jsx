import React from 'react'
import applogo from '../assets/app-store.png'
function Header() {
  return (
<div className='w-full h-16 p-4 flex justify-between' style={{ background: 'linear-gradient(90deg,rgba(23,23,23,1) 0%, rgba(75,84,158,1) 67%)' }}>
      <img src={applogo} alt=""  className='w-8 h-8 ml-6 '/>
      <button className='mr-12 text-white'>Logout</button>
    </div>
  )
}

export default Header

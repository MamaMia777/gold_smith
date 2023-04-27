import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-10 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <img src="./g3.svg" alt="icon" className='w-[40px]' />
        <h3 className='text-[25px] xl:text-[50px] leading-none font-bold bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-700 text-clip bg-clip-text text-transparent  '>GoldSmith 3D</h3>
        <img src="./g3.svg" alt="icon" className='w-[40px]' />
      </div>
    </nav>
  )
}

export default Navbar
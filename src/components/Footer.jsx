import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'


const Footer = () => {
  return (
    <nav className={`${styles.paddingX} w-full py-5 bottom-0 z-10 bg-primary flex justify-center flex-col items-center gap-2`}>
      <div className='flex justify-center items-center gap-2  '>
        <img className='w-[30px] cursor-pointer' src="./instagram.png" alt="" />
        <span>+371 20015925</span>
      </div>
      <span className='text-secondary cursor-pointer hover:text-gray-500'>Terms of Service</span>

    </nav>
  )
}

export default Footer
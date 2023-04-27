import React from 'react'
import { styles } from '../styles'


const Footer = () => {
  return (
    <nav className={`${styles.paddingX} w-full py-5 bottom-0 z-10 bg-primary flex justify-center flex-col items-center gap-2`}>
      <div className='flex justify-center items-center gap-2  '>
        <img className='w-[30px] cursor-pointer' src="./instagram.png" alt="" />
        <span>
          <a href="tel:+37120015925">+371 20015925</a>
        </span>
      </div>
      <a className='text-secondary cursor-pointer hover:text-gray-500' href='./tos.docx'>Terms of Service</a>
      <span>Copyright GoldSmith3D © All Rights Reserved</span>

    </nav>
  )
}

export default Footer
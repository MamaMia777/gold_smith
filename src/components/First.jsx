import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
const First = () => {
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden items-center justify-between'>
      <motion.img src='./phone5.png' alt='phone apple samsung' className='xl:w-[300px]' />

      <div className='text-right'>
        <h1 className='font-bold text-[35px]'>Создали 30+ ботов от <br /> модераторских до полноценных игр и сервисов</h1>
        <p className={`${styles.sectionSubText} mt-10`}>Примеры наших ботов вы видете у себя на экране</p>
      </div>
    </div>
  )
}

export default SectionWrapper(First, "first")
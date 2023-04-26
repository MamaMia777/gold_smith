import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const First = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
      <motion.img
        src='./rings/ring1.png'
        variants={fadeIn('right', 'spring', 0.5 * 0, 1)}
        className='rounded-xl'
      // className=''
      />
      <motion.img
        src='./rings/ring2.png'
        variants={fadeIn('right', 'spring', 0.5 * 1, 1)}
        className='rounded-xl'
      />
      <motion.img
        src='./rings/ring3.png'
        variants={fadeIn('right', 'spring', 0.5 * 2, 1)}
        className='rounded-xl'
      />

      <motion.img
        src='./rings/ring4.png'
        variants={fadeIn('right', 'spring', 0.5 * 3, 1)}
        className='rounded-xl'
      />
      <motion.img
        src='./rings/ring5.png'
        variants={fadeIn('right', 'spring', 0.5 * 4, 1)}
        className='rounded-xl'
      />
      <motion.img
        src='./rings/ring6.png'
        variants={fadeIn('right', 'spring', 0.5 * 5, 1)}
        className='rounded-xl'
      />
    </div >
  )
}

export default SectionWrapper(First, "first")
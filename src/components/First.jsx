import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const First = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>

      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * 0, 1)}
        className='rounded-xl w-full green-pink-gradient overflow-hidden p-[1px]'
      >
        <img className='rounded-xl' src="./rings/ring1.png" alt="ring" />

      </motion.div>

      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * 1, 1)}
        className='rounded-xl w-full green-pink-gradient overflow-hidden p-[1px]'
      >
        <img className='rounded-xl' src="./rings/ring2.png" alt="ring" />

      </motion.div>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * 2, 1)}
        className='rounded-xl w-full green-pink-gradient overflow-hidden p-[1px]'
      >
        <img className='rounded-xl' src="./rings/ring3.png" alt="ring" />

      </motion.div>

      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * 3, 1)}
        className='rounded-xl w-full green-pink-gradient overflow-hidden p-[1px]'
      >
        <img className='rounded-xl' src="./rings/ring4.png" alt="ring" />

      </motion.div>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * 4, 1)}
        className='rounded-xl w-full green-pink-gradient overflow-hidden p-[1px]'
      >
        <img className='rounded-xl' src="./rings/ring5.png" alt="ring" />

      </motion.div>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * 5, 1)}
        className='rounded-xl w-full green-pink-gradient overflow-hidden p-[1px]'
      >
        <img className='rounded-xl' src="./rings/ring6.png" alt="ring" />

      </motion.div>
    </div >
  )
}

export default SectionWrapper(First, "first")
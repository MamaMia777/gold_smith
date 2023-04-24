import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
const Second = () => {
  return (
    <div className='xl:mt-12 xl:flex-row-reverse flex-col-reverse flex gap-10 overflow-hidden items-center justify-between'>
      <motion.img src='./phone3.png' alt='phone apple samsung' className='xl:w-[300px]' />

      <div className='text-left'>
        <h1 className='font-bold text-[35px]'>Благодаря боту <br />можно принимать и <br /> отправлять транзакции</h1>
        <p className={`${styles.sectionSubText} mt-10`}>Возможны все виды оплат, от <br /> криптовалюты и виртуальных предметов <br /> до VISA \ Mastercard</p>
      </div>
    </div>
  )
}

export default SectionWrapper(Second, "")
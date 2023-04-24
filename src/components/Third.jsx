import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
const Third = () => {
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden items-center justify-between'>
      <motion.img src='./notebook.png' alt='phone apple samsung' className='xl:w-[600px]' />

      <div className='text-right'>
        <h1 className='font-bold text-[35px]'>Так же разрабатываем любой сложности web-приложения</h1>
        <p className={`${styles.sectionSubText} mt-10`}>Начиная от магазина с многофункциональной панелю и<br /> заканчивая онлайн КАЗИНО</p>
      </div>
    </div>
  )
}

export default SectionWrapper(Third, "")
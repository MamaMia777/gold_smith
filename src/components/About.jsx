import React from 'react'

import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className=''>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex items-center justify-evenly
           flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] text-center font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-tg`}>Mūsu pakalpojumi</h2>
      </motion.div>
      <div className='mt-20 grid grid-cols-2 md:grid-cols-3  gap-10'>
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service} />))}
      </div>
    </>
  )
}

export default
  SectionWrapper(About, "about")
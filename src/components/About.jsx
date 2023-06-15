
import React from 'react'

import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title, index, icon, extraText }) => {
  return (
    <Tilt className=''>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card relative overflow-hidden'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className='bg-tertiary group rounded-[20px] py-5 px-12 min-h-[280px] flex items-center justify-evenly
           flex-col'>
          <img src={icon} alt={title} className={` ${index === 4 ? 'w-[4rem] h-[4rem]' : 'w-16 h-16'} object-contain`} />
          <h3 className='text-white text-[20px] text-center font-bold' >{title}</h3>

          {extraText && <div className='absolute top-0 left-0 w-full h-full bg-tertiary p-5 text-center invisible group-hover:visible'>
            <p>{extraText}</p>
          </div>}


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
      <div className='mt-20 grid grid-cols-1 md:grid-cols-3  gap-10'>
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service} />))}
      </div>
    </>
  )
}

export default
  SectionWrapper(About, "about")
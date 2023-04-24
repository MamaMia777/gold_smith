import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
const Opportunities = () => {
  return (
    <section className='relative w-full h-screen mx-auto bg-black'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex sm:flex-col xl:flex-row items-center gap-5`}>
        <div className>
          <h3 className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Скорость Качество</h3>
          <h3 className='font-black text-tg lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>Надежность</h3>
          <h3 className='font-black text-tg lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'><span className='text-white'>и</span> Гарантия</h3>
          <h1 className={`font-bold`}>Умный бот всегда придет на помощь</h1>


          <p className=''>Намерены зарабатывать или автоматизировать свой Бизнес ?</p>
          <p>Сделайте заказ прямо в 2 клика</p>

          <button className='px-5 py-3 text-tg bg-white rounded-xl mt-5 font-black'>Связаться с нами</button>

        </div>
        <div>
          <img className='scale-150' src="./phone.png" alt="" />
        </div>

      </div>

    </section>
  )
}

export default Opportunities
import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row lg:flex-row items-center`}>
        <div className='w-full'>
          <h1 className='font-black lg:text-[50px] lg:leading-[30px]'>Скорость. Качество.</h1>
          <h1 className='font-black text-tg lg:text-[45px]'>Надежность. Гарантия.</h1>
          <p className={`${styles.sectionSubText} mt-5`}>Желаете создать бота для пассивоного заработка ?</p>
          <p className={`${styles.sectionSubText} mt-5`}>Мечтаете ДЕШЕВО и БЫСТРО автоматизировать свой БИЗНЕС ?</p>
          <p className={`${styles.sectionSubText} mt-5`}>Сделайте заказ прямо сейчас в 2 клика !</p>

          <a href="#contact">
            <div className='px-10 py-4 text-white bg-tg w-fit rounded-[25px] mt-5 font-bold hover:text-tg hover:bg-white'>ЗАКАЗАТЬ</div>
          </a>
        </div>
        <div className='relative scale-75 sm:scale-100 xl:scale-150'>
          <motion.img
            src="./phone.png"
            alt="phone"
            animate={{
              y: [0, 30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'loop'
            }}

          />

        </div>

      </div>

    </section>
  )
}

export default Hero
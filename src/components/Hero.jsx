import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col gap-[4rem] sm:flex-row lg:flex-row items-center`}>
        <div className='w-full'>
          <h1 className={`${styles.sectionHeadText} bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-700 text-clip bg-clip-text text-transparent`}>Sveicināti mūsu mājaslapā!</h1>
          <p className={`${styles.sectionSubText} mt-10 text-justify`}>Jau vairāk kā 12 gadus esam veltījuši sevi skaistu un augstas kvalitātes rotu radīšanai, izmantojot pilnu ražošanas ciklu. Sākot no sākotnējā 3D modelēšanas dizaina līdz galīgā produkta ražošanai, mēs iesaistāmies katrā procesa posmā, lai nodrošinātu, ka katrs rotas gabals, ko mēs radām, ir patiesa mākslas darbība.</p>

        </div>
        <div className='relative scale-75 sm:scale-100 xl:scale-150'>
          <motion.img
            src="./ring.png"
            alt="ring"
            className='w-[300px] px-4'
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
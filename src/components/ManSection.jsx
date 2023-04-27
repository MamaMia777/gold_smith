import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ManSection = () => {
  return (
    <div className='xl:mt-12 xl:flex-row-reverse flex-col-reverse flex gap-10 overflow-hidden items-center justify-between'>
      <motion.img

        variants={fadeIn('left', 'spring', 0.5 * 3, 1)}
        src='./man.png' alt='phone apple samsung' className='xl:w-[500px] rounded-xl' />

      {/* <motion.div className='text-left' variants={fadeIn('left', 'spring', 0.5 * 1, 1)}>
        <p className={`${styles.sectionSubText} text-right`}>
          Mūsu dizaina detaļās iemiesojas drosmīgs un izsmalcināts gaumeņu savienojums. <br /><br />Katrs no mūsu izstrādājumiem atklāj ne tikai unikālu dizainu, bet arī augstas kvalitātes materiālus un izcilu izpildījumu.<br /><br /> Izceļieties no pūļa un izvēlieties dizainu, kas atspoguļo jūsu drosmīgo un izsmalcināto personību!
        </p>
      </motion.div> */}
      <div>
        <motion.p variants={textVariant(1)} className={`${styles.sectionSubText} mb-6`}>
          Mūsu dizaina detaļās iemiesojas drosmīgs un izsmalcināts gaumeņu savienojums.
        </motion.p>
        <motion.p variants={textVariant(2)} className={`${styles.sectionSubText} mb-6 text-right`} >
          Katrs no mūsu izstrādājumiem atklāj ne tikai unikālu dizainu, bet arī augstas kvalitātes materiālus un izcilu izpildījumu.
        </motion.p>
        <motion.p variants={textVariant(3)} className={`${styles.sectionSubText} `}>
          Izcelieties no pūļa un izvēlieties dizainu, kas atspoguļo jūsu drosmīgo un izsmalcināto personību!
        </motion.p>
      </div>

    </div>
  )
}

export default SectionWrapper(ManSection, "")
import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const RingSection = () => {
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden items-center justify-between'>
      <motion.img

        variants={fadeIn('right', 'spring', 0.5 * 3, 1)}
        src='./r.png' alt='phone apple samsung' className='xl:w-[500px] rounded-xl' />

      {/* <motion.div className='text-left' variants={fadeIn('left', 'spring', 0.5 * 1, 1)}>
        <p className={`${styles.sectionSubText} text-right`}>
          Mūsu dizaina detaļās iemiesojas drosmīgs un izsmalcināts gaumeņu savienojums. <br /><br />Katrs no mūsu izstrādājumiem atklāj ne tikai unikālu dizainu, bet arī augstas kvalitātes materiālus un izcilu izpildījumu.<br /><br /> Izceļieties no pūļa un izvēlieties dizainu, kas atspoguļo jūsu drosmīgo un izsmalcināto personību!
        </p>
      </motion.div> */}
      <div>
        <motion.p variants={textVariant(1)} className={`${styles.sectionSubText} mb-6`}>
          Mūsu 3D vizualizācijas un modelēšanas eksperti palīdzēs jūsu zīmolam pāriet uz jaunu līmeni!
        </motion.p>
        <motion.p variants={textVariant(2)} className={`${styles.sectionSubText} mb-6 text-right`} >
          Mēs specializējamies juvelierizstrādājumu 3D modelēšanā un renderēšanā, un mūsu mērķis ir radīt ekskluzīvas,  augstas kvalitātes darījumu iespējas jūsu biznesam!
        </motion.p>
      </div>

    </div>
  )
}

export default SectionWrapper(RingSection, "")
import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
const Video = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <h2 className={`${styles.sectionHeadText} text-tg mb-10`}>Mūsu viedoklis</h2>
      {/* </motion.div> */}
      <video controls src="./opinion.mp4" />
    </>

  )
}

export default SectionWrapper(Video, "")
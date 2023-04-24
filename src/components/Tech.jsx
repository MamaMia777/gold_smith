import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((el) => (
        <div className='w-28 h-28' key={el.name}>
          <BallCanvas icon={el.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")
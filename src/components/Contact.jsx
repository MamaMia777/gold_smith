import React from 'react'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })

  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    emailjs.send(
      'service_1ala2jz',
      'template_1qkis1j',
      {
        from_name: form.name,
        to_name: 'goldsmith3d',
        from_email: form.email,
        to_email: 'infogoldsmith3d@gmail.com',
        message: form.message
      },
      'FzIZQM-SvUUM2aJUE'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible!');
      setForm({
        name: '',
        email: '',
        message: ''
      }, (error) => {
        setLoading(false)
        console.log(error)
        alert('Something went wrong')
      })
    })
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden items-center justify-between'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-[#09322b] p-8 rounded-2xl w-full'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input className='bg-[#0b4037] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' type="text" name="name" value={form.name} onChange={handleChange} placeholder={"What's your name?"} />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input className='bg-[#0b4037] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' type="email" name="email" value={form.email} onChange={handleChange} placeholder={"What's your email?"} />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your order</span>
            <textarea rows="7" className='bg-[#0b4037] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' type="text" name="message" value={form.message} onChange={handleChange} placeholder={"What do you want to create ..."} />
          </label>

          <button type="submit" className='bg-[#0b4037] py-3 px-8 w-fit outline-none text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>


        </form>
      </motion.div>

      <motion.img
        // variants={slideIn('right', 'tween', 0.2, 1)}
        src="./diamond.png"
        alt="diamond"
        className='w-[200px] h-[200px] md:w-[400px] md:h-[400px]'
        animate={{
          y: [0, 50, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop'
        }}

      />
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
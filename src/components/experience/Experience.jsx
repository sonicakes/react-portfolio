import React from 'react'
import './experience.css'
import { RiCheckboxCircleLine } from 'react-icons/ri'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
<div className='experience__frontend'>
  <h3>FrontEnd Development</h3>
  <div className="experience__content">
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
      <div><h4>HTML</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
     <div> <h4>Javascript</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
     <div> <h4>Bootstrap</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
      <div><h4>Tailwind</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
      <div><h4>React</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
      <div><h4>Vue</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
  </div>
</div>
<div className='experience__backend'>
<h3>BackEnd Development</h3>
  <div className="experience__content">
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
     <div> <h4>C++</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
    <div>  <h4>.NET</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
      <div><h4>NodeJS</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
     <div> <h4>PHP</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
      <div><h4>MongoDB</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience__details'>
      <RiCheckboxCircleLine className='experience__icon'/>
      <div><h4>MySQL</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
  </div>
</div>
      </div>
    </section>
  )
}

export default Experience
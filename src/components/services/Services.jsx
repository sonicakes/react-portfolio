import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>Skill 1</li>
            <li><BiCheck className='service__list-icon'/>Skill 2</li>
            <li><BiCheck className='service__list-icon'/>Skill 3</li>
            <li><BiCheck className='service__list-icon'/>Skill 4</li>
            <li><BiCheck className='service__list-icon'/>Skill 5</li>
            <li><BiCheck className='service__list-icon'/>Skill 6</li>
            <li><BiCheck className='service__list-icon'/>Skill 7</li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>Skill 1</li>
            <li><BiCheck className='service__list-icon'/>Skill 2</li>
            <li><BiCheck className='service__list-icon'/>Skill 3</li>
            <li><BiCheck className='service__list-icon'/>Skill 4</li>
            <li><BiCheck className='service__list-icon'/>Skill 5</li>
            <li><BiCheck className='service__list-icon'/>Skill 6</li>
            <li><BiCheck className='service__list-icon'/>Skill 7</li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>Skill 1</li>
            <li><BiCheck className='service__list-icon'/>Skill 2</li>
            <li><BiCheck className='service__list-icon'/>Skill 3</li>
            <li><BiCheck className='service__list-icon'/>Skill 4</li>
            <li><BiCheck className='service__list-icon'/>Skill 5</li>
            <li><BiCheck className='service__list-icon'/>Skill 6</li>
            <li><BiCheck className='service__list-icon'/>Skill 7</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="content">
            <h1>Znajdź swoje miejsce</h1>
            <p className="search-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa placeat sit itaque ipsum molestias vel perferendis ratione, accusamus excepturi voluptate molestiae libero officia sed quae iste nihil quasi! Ducimus, distinctio!</p>
            <form action="" className="search">
                <div>
                    <input type="text" placeholder='Szukaj' />
                </div>
                <div className="radio">
                    <input type="radio" checked />
                    <label>Kup</label>
                    <input type="radio" />
                    <label>Sprzedaj</label>
                    <button type='submit'><AiOutlineSearch className='icon' /></button>
                </div>
            </form>
        
        </div>
    </div>
  )
}

export default Hero
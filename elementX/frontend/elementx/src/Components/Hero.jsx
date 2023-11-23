import React from 'react';
import {ImSearch} from 'react-icons/im';
import { BsStars } from 'react-icons/bs';
import './../Css/Hero.css';

const Hero = () => {
  return (
    <div className='HeroContainer'>
        <div className='UpperCon'>
            <h1 className='heading1'>Open-Source UI Building </h1>
            <h1 className='heading2'> Blocks For Projects </h1>
            <h2 className='heading3'>Create, Share & Use <span className='beautiful'> <BsStars />Beautiful</span> Custom <br />Elements Made With CSS</h2>
            <div className='main-input'>
            <div className='input-container'>
                <input className='input' placeholder='Search for  UI elements,creators,tags....'/>
                <button className="searchButton"><ImSearch className='search-icon'/>&nbsp;&nbsp;&nbsp;Search</button>  
            </div>
            </div>
        </div>

    </div>
  )
}

export default Hero
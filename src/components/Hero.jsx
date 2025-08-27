import React from 'react';
import heroImg from '../assets/images/hero.png';

const Hero = () => {
    return (
        <header>
            <img src={heroImg} alt="Hero Banner" />
            <h1>Find <span className='text-gradient'>Movies</span> You’ll Love Without the Hassle</h1>
        </header>
    )
}

export default Hero;
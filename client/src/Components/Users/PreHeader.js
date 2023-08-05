import React from 'react';
import '../../styles/preheader.css';

export default function PreHeader(){
    return (
        <div className='top-container'>
            <div className='components1'>
                <a style = {{color : '#6A983C'}}href = "/" >Chat with us </a>
                <a href = "/"> +420 336 775 664 </a>
                <a href = "/"> info@freshnesecom.com</a>
            </div>
            <div className='components2'>
                <a href = "/"> Blog</a>
                <a href = "/"> About Us </a>
                <a href = "/"> Careers </a>
            </div>
        </div>
    )
}
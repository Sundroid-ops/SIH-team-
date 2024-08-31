/* eslint-disable no-unused-vars */
import React from 'react'
import video from '../assets/video.mp4';
import HomePage from './HomePage';

function BgVideo() {
  return (
    <div className='max-w-full object-cover'>  
        <div className="overlay ">  
            <video src={video} autoPlay loop muted className='opacity-75 overflow-hidden '/>
            <div className='absolute -translate-y-64 sm:-translate-y-full '>
                <HomePage/>
            </div>
        </div>
    </div>
  )
}

export default BgVideo;


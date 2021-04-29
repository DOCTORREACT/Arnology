import React from 'react'
import './BackgroundVideo.css'
import Video from '../../assets/video/galaxy.mp4'


const BackgroundVideo = () => {
    return (
        <video 
            className='background-video'   
            autoPlay
            loop 
            muted
       > 
           <source src={Video} type='video/mp4'/>
       </video>
    )
}

export default BackgroundVideo
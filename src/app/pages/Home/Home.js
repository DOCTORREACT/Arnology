import React from 'react'
import './Home.css'
import HomeInfo from '../../components/HomeInfo/HomeInfo'
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo'


const Home = () => {
    return (
        <div className='home-container'>
                <BackgroundVideo />
                <HomeInfo />  
        </div>
    )
}

export default Home
import React from 'react'
import BlueLine from '../sharable-components/BlueLine/BlueLine'
import Button from '../sharable-components/Button/Button'
import './HomeInfo.css'


const HomeInfo = () => {
    return (
        <div className='home-info-wrapper'> 
            <div className='home-info-container'>
                <div className='home-info-content'>
                    <h2 className='home-info-title'>NEXT STEP</h2>
                    <h2 className='home-info-title'>LET YOUR IDEAS COME TRUE</h2>
                    <BlueLine width={'176px'} className={'home-info'}/>
                    <p>
                        You have the vision for a stunning digital experience. We’re the software design and engineering team that can bring it to life.
                    </p>
                    <Button 
                        title={'GET IN TOUCH'}
                        className={'home-info'}
                    />
                </div>

                <div className='play-btn'></div>
            </div>
            <div className='home-info-footer'>
            <div></div>
            <p>WE'VE BUILT SOLUTIONS FOR...</p>
            </div>
        </div>
    )
}

export default HomeInfo
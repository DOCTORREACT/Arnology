import React from 'react'
import './TechnologiesWeUse.css'
import LogoWithName from '../sharable-components/LogoWithName/LogoWithName'
import PhpLogo from '../../assets/logo/php/php-1@3x.png'
import NodeLogo from '../../assets/logo/JS/Node.js-Logo.wine@3x.png'
import BlueLine from '../sharable-components/BlueLine/BlueLine'
import Arrow from '../sharable-components/SVGComponents/Arrow'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const TechnologiesWeUse = () => {
    return (
        <div className='techno-wrapper'>
            <div className='techno-container'>

                <div className='techno-square-container'>
                    <div className='first-square'><p></p></div>
                    <div className='second-square'></div>
                    <div className='third-square'></div>
                </div>

                    <div className='techno-title-arrow-container'>
                            <p className='techno-title'>Web development technologies we use</p>
                            <Arrow inline={true}/>
                    </div>
                
                <BlueLine width={'60px'} className={'techno'}/>

                <div className='techno-logo-container'>
                    <AwesomeSlider>
                        <div><LogoWithName logo={NodeLogo} title={'Node JS'} className={'techno'} /></div>
                        <div><LogoWithName logo={PhpLogo} title={'PHP'} className={'techno'} /></div>
                        <div><LogoWithName logo={NodeLogo} title={'Node JS'} className={'techno'} /></div>
                        <div><LogoWithName logo={PhpLogo} title={'PHP'} className={'techno'} /></div>
                    </AwesomeSlider>

                    {/* <LogoWithName logo={PhpLogo} title={'PHP'} className={'techno'} />
                    <LogoWithName logo={NodeLogo} title={'Node JS'} className={'techno'} />
                    <LogoWithName logo={PhpLogo} title={'PHP'} className={'techno'} />
                    <LogoWithName logo={NodeLogo} title={'Node JS'} className={'techno'} />
                    <LogoWithName logo={PhpLogo} title={'PHP'} className={'techno'} /> */}
                    {/* <LogoWithName logo={NodeLogo} title={'Node JS'} className={'techno'} />
                    <LogoWithName logo={PhpLogo} title={'PHP'} className={'techno'} /> */}
                </div>
            
            </div>
        </div>

    )
}

export default TechnologiesWeUse
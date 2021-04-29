import React from 'react'
import './LogoWithName.css'


const LogoWithName = ({ logo, title, className = '' }) => {
    return (
        <div className={ "logo-with-name-wrapper" + ' ' + className }>
            <div className={ 'logo-img-container' + ' ' + className}>
                <img src={logo} />
            </div>
            <div className={ 'logo-title' + ' ' + className }>{ title }</div> 
        </div>
    )
}

export default LogoWithName
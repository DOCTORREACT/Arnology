import React from 'react'
import './Button.css'


const Button = ({ title, className = '', width = '224px' }) => {
    return (
        <div className={'button_wrapper'} style={{maxWidth: width}}>
            <button
                type={"submit"}
                className={'button_container' + ' ' + className}>
                {title}    
            </button>
        </div>
    )
}

export default Button
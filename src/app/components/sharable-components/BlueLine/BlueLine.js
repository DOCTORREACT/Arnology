import React from 'react'
import './BlueLine.css'

const BlueLine = ({ width = '50px', className = ''}) => {
    return (
    <div 
        className={'blue-line' + ' ' + className} 
        style={{width: width}}>
    </div>
    )
}

export default BlueLine
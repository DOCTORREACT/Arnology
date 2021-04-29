import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import ArnLogo from '../../assets/logo/arn/arn_logo@3x.png'


const Header = () => {
    return (
        <header className='app-header-wrapper'>
            <div className='app-header-container'>
            <NavLink to={'/'} className='arn-logo-link'>
                <img src={ArnLogo} />
            </NavLink>

            <ul className='menu-links'>
                <NavLink to={'/about'} className='header-link'>About</NavLink>
                <NavLink to={'/services'} className='header-link'>Services </NavLink>
                <NavLink to={'/works'} className='header-link'>Works </NavLink>
                <NavLink to={'/career'} className='header-link'>Career </NavLink>
                <NavLink to={'/contact'} className='header-link'>Contact </NavLink>
            </ul>

            <button className='estimate-btn'>GET AN ESTIMATE</button>
            </div>
        </header>
    )
}

export default Header
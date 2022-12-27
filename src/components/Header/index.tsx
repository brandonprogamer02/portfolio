import React, { useEffect, useReducer, useState } from 'react';
import './style.css';
import logoImage from '../../images/image.png'
import HamburguerMenu from './HamburgerMenu';

function Header() {
     const [movil, setMovil] = useState(window.screen.width < 768);
     const [, forceUpdate] = useReducer(x => x + 1, 0);

     window.onresize = () => {
          setMovil(window.screen.width < 768);
     }
     useEffect(() => {
          forceUpdate();
     }, [movil])

     return (
          <div className="header row" style={{ position: 'fixed', top: 0, height: 90, zIndex: 1, width: 'calc(100% + 20px)' }}>
               <div className='col-7 d-flex justify-content-center align-items-center'>
                    <img src={logoImage} alt="logo" style={{ width: 100 }} className='' />
                    <h2 style={{ color: 'white' }}>Brandox Portfolio</h2>
               </div>
               <div className='col-5 d-flex justify-content-end' >
                    <div style={{ display: movil ? '' : 'none' }}>
                         <HamburguerMenu />
                    </div>
                    <div style={{ display: movil ? 'none' : '' }}>
                         <a href='#home' className="mx-2 fw-bold" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                         <a href='#about-me' className="mx-2 fw-bold" style={{ color: 'white', textDecoration: 'none' }}>About</a>
                         <a href='#my-projects' className="mx-2 fw-bold" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
                         <a href='#my-skills' className="mx-2 fw-bold" style={{ color: 'white', textDecoration: 'none' }}>Skills</a>
                         <a href='#contact' className="mx-2 fw-bold" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
                    </div>
               </div>
          </div>
     )
}

export default Header;
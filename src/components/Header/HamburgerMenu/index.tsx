import React, { useState } from 'react';
import sandwitchMenuImage from '../../../images/sandwitchMenu.svg'
import './style.css'

function HamburguerMenu() {
     const [active, setActive] = useState(false);


     return (
          <div className=''>
               <img
                    src={sandwitchMenuImage} alt=" sandwitch menu" width='60%'
                    style={{ position: 'relative', right: -50 }}
                    onClick={() => setActive(!active)}
               />
               <div
                    style={{
                         visibility: active ? 'visible' : 'hidden',
                         backgroundColor: '#894fec', top: 90, height: 40, position: 'absolute', left: 0,

                    }}
                    className='w-100 d-flex justify-content-around align-items-center'
               >
                    <a href='#home' className="mx-2 fw-bold" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                    <a href='#about-me' className="mx-2 fw-bold" style={{ color: 'white', textDecoration: 'none' }}>About</a>
                    <a href='#my-projects' className="mx-2 fw-bold" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
                    <a href='#my-skills' className="mx-2 fw-bold" style={{ color: 'white', textDecoration: 'none' }}>Skills</a>
                    <a href='#contact' className="mx-2 fw-bold" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
               </div>
          </div>
     )
}

export default HamburguerMenu;
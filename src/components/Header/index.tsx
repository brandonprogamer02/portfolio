import React from 'react';
import './style.css';
import logoImage from '../../images/image.png'
function Header() {

     return (
          <div className="header " style={{ position: 'fixed', top: 0, width: "100%", height: 90, zIndex: 1 }}>
               <img src={logoImage} alt="logo image" style={{ width: 100 }} className='' />
               <h2 style={{ color: 'white', left: 90, position: 'absolute' }}>Brandox Portfolio</h2>
               <div style={{ margin: 20 }}>
                    <label className="mx-2 fw-bold" style={{ color: 'white' }}>Home</label>
                    <label className="mx-2 fw-bold" style={{ color: 'white' }}>About</label>
                    <label className="mx-2 fw-bold" style={{ color: 'white' }}>Projects</label>
                    <label className="mx-2 fw-bold" style={{ color: 'white' }}>Skills</label>
                    <label className="mx-2 fw-bold" style={{ color: 'white' }}>Contact</label>
               </div>
          </div>
     )
}

export default Header;
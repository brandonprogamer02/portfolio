import React, { useEffect, useState } from 'react';
import './style.css';


interface IProps {
     text: string,
     porcentual: number
}

function BarDesktop({ text, porcentual }: IProps) {

     return (

          <div className='bar-border my-2 border' style={{ width: '100%', borderRadius: 7, height: 36 }}>

               <div
                    className='w-100 d-flex justify-content-center '

               >
                    <span
                         style={{ color: 'white', top: 3, position: 'relative' }}
                    >{text}
                    </span>
               </div>
               <div
                    style={{
                         backgroundColor: '#894FEC', width: `calc(${porcentual}%)`,
                         borderRadius: 7, height: 35, position: 'relative', top: -24, zIndex: -1
                    }}
               >
               </div>
          </div >

     )
}

export default BarDesktop;
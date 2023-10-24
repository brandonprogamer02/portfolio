import React from 'react';
import lampImage from '../../images/bombilla.png';
import TechnologiesSection from './TecnologiesSection';

function MySkills() {

     return (
          <div className='row mb-5'>
               <div className="col-12 mb-4">
                    <h4 style={{ color: '#894FEC', fontWeight: 'bold', textAlign: 'center', marginTop: 30 }}>My Skills</h4>
               </div>
               <div className="col-12 d-flex justify-content-between col-md-4 mb-1 align-items-center">

                    <img src={lampImage} alt="lamp" style={{ width: 50, marginRight: 10, marginBottom: 20 }} className='' />
                    <div>
                         <p className=''>These are the cutting-edge technologies and tools that i have expertise in</p>
                    </div>

               </div>
               <div className='col-12 col-md-8'>
                    <TechnologiesSection />
               </div>
          </div>
     )
}

export default MySkills;
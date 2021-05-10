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
                         <p className=''>I dominate both the backend and frontend areas, but I specialize more in the frontend area with these technologies.</p>
                         <p className=''>I also like to use the adobe xd tool a lot, to make the mackup of my applications. I even did the design of this portfolio in adobe xd. 😊</p>
                    </div>

               </div>
               <div className='col-12 col-md-8'>
                    <TechnologiesSection />
               </div>
          </div>
     )
}

export default MySkills;
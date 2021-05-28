import React from 'react';
import lampImage from '../../images/bombilla.png';
import TechnologiesSection from './TecnologiesSection';

function MySkills() {

     return (
          <div className='row mb-5'>
               <div className="col-12 mb-4">
                    <h4 style={{ color: '#894FEC', fontWeight: 'bold', textAlign: 'center', marginTop: 30 }}>Mes compétences</h4>
               </div>
               <div className="col-12 d-flex justify-content-between col-md-4 mb-1 align-items-center">

                    <img src={lampImage} alt="lamp" style={{ width: 50, marginRight: 10, marginBottom: 20 }} className='' />
                    <div>
                         <p className=''>Je domine à la fois les zones backend et frontend, mais je me spécialise davantage dans la zone frontend avec ces technologies.</p>
                         <p className=''>J'aime aussi beaucoup utiliser l'outil adobe xd, pour faire la composition de mes applications. J'ai même fait la conception de ce portfolio en adobe xd.😊</p>
                    </div>

               </div>
               <div className='col-12 col-md-8'>
                    <TechnologiesSection />
               </div>
          </div>
     )
}

export default MySkills;
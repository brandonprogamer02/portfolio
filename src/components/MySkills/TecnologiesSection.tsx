import React, { useState } from 'react';
import Bar from './Bar';
import './style.css';
import { data } from './data';


function TechnologiesSection() {
     const [currentTab, setCurrentTab] = useState(2);

     return (
          <div className='border-shadow p-3' style={{ width: '100%' }}>
               <div className='w-100 d-flex justify-content-between mb-4'>
                    <label className='border-right-red text-center' style={{ width: '30%' }}
                         onClick={() => setCurrentTab(0)}
                    >
                         <span className='px-3 py-1 hover' style={{ backgroundColor: currentTab === 0 ? '#E1E1E1' : '', borderRadius: 7 }}>
                              Fronted
                         </span>
                    </label>
                    <label className='text-center border-right-red' style={{ width: '30%' }}
                         onClick={() => setCurrentTab(1)}
                    >
                         <span className='px-3 py-1 hover' style={{ backgroundColor: currentTab === 1 ? '#E1E1E1' : '', borderRadius: 7 }}>
                              Tools & Deploy
                         </span>
                    </label>
                    <label className='text-center' style={{ width: '30%' }}
                         onClick={() => setCurrentTab(2)}
                    >
                         <span className='px-3 py-1 hover' style={{ backgroundColor: currentTab === 2 ? '#E1E1E1' : '', borderRadius: 7 }}>
                              Backend
                         </span>
                    </label>
               </div>
               <div className='w-100'>

                    {currentTab === 0 && data.frontend.map(el => <Bar text={el.technology} porcentual={el.porcentual} />)}
                    {currentTab === 1 && data.deploy.map(el => <Bar text={el.technology} porcentual={el.porcentual} />)}
                    {currentTab === 2 && data.backend.map(el => <Bar text={el.technology} porcentual={el.porcentual} />)}

               </div>
          </div>
     )
}



export default TechnologiesSection;
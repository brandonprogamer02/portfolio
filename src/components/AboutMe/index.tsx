import React from 'react';
import meImage from '../../images/me.jpg'


function AboutMe() {

     return (
          <div className="row mb-5 mt-5">
               <div className="col-12 " >
                    <h3 style={{ color: '#632CC2', textAlign: 'center', marginTop: 20, fontWeight: 'bold', marginBottom: 40 }}>
                         Who i Am?
                    </h3>
               </div>
               <div className="col-12 col-md-3 ">
                    <div className=" pb-2 w-100 h-100 d-flex justify-content-center align-items-center" >
                         <img src={meImage} alt="brandon's face image" style={{ borderRadius: 10, width: '55%' }} />
                    </div>
               </div>
               <div className="col-12 col-md-9">
                    <div style={{ padding: 10 }}>
                         <p style={{ fontSize: 20 }}>
                              My name is Brandon Saul Fernandez Mejia, I am a young and passionate software developer for 1 year and a half, I really like being able to develop effective, functional and presentable solutions for the different problems of daily life as well as being able to facilitate myself and others life through my knowledge in the world of software.
                                   </p>
                         <p style={{ fontSize: 20 }}>
                              I am also a very curious person who loves to try different things and always be updated with what surrounds me. in addition to being always active and open to consider and learn new technologies.
                                   </p>
                         <p style={{ fontSize: 20 }}>Student of the Technological Institute of the Americas (ITLA).</p>
                    </div>
               </div>

          </div>
     )
}

export default AboutMe;
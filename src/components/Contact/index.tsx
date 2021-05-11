import React from 'react';
import darkBorderImage from '../../images/borderDark.svg';
import personaTelephoneImage from '../../images/personal-telephone.png';
import locationImage from '../../images/location.png';
import telephoneImage from '../../images/telephone.png';
import emailImage from '../../images/email.png';
import './style.css';
import githubImage from '../../images/github.png';
import linkedinImage from '../../images/linkedin.png';

function Contact() {

     return (
          <>
               {/* CIRCLE BORDER */}
               <img src={darkBorderImage} alt="border dark image" style={{ marginBottom: -22, position: 'relative', width: 'calc(100% + 60px)', right: 13 }} />
               <div className='py-4 row' style={{ backgroundColor: '#2E135C' }}>

                    <div className='' style={{ height: 100 }}></div>
                    <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#894FEC' }}>Contact Me</h4>
                    <div className="col-12 col-md-6  my-5  d-flex justify-content-center align-items-center" >
                         <img src={personaTelephoneImage} alt='personal telephone image' className='w-25' />
                         <div className='d-flex flex-column flex-wrap justify-content-around align-items-center'>
                              <label style={{ color: 'white', marginBottom: 20 }}>Personal Number</label>
                              <label style={{ color: 'white' }}>8497392210</label>
                         </div>
                    </div>
                    <div className="col-12 col-md-6 my-5">
                         <div className=' d-flex justify-content-center' style={{}}>
                              <img src={locationImage} alt='personal telephone image' style={{ width: '30%' }} />
                              <div className='d-flex flex-column flex-wrap justify-content-around align-items-center'>
                                   <label style={{ color: 'white', marginBottom: 20 }}>Address</label>
                                   <div className="d-flex flex-column align-items-center" style={{ width: '100%' }}>
                                        <label style={{ color: 'white' }} className='text-center'>Av. 25 de Febrero, Sector Villa Olimpica</label>
                                        <label style={{ color: 'white', marginTop: 6 }}>
                                             Santo Domingo Este
                                        </label>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="col-12 col-md-6 my-5">
                         <div className=' d-flex  justify-content-center mb-5'>
                              <img src={telephoneImage} alt='personal telephone image' className='w-25' />
                              <div
                                   className='d-flex flex-column flex-wrap justify-content-around align-items-center'
                                   style={{ marginLeft: 15 }}
                              >
                                   <label style={{ color: 'white' }}>Home Phone</label>
                                   <label style={{ color: 'white' }}>8095915207</label>
                              </div>
                         </div>
                    </div>
                    <div className="col-12  col-md-6 my-5 ">
                         <div className=' d-flex  justify-content-center mb-5'>
                              <img src={emailImage} alt='personal telephone image' style={{ width: '30%' }} className='' />
                              <div className='d-flex flex-column flex-wrap justify-content-center align-items-center'>
                                   <label style={{ color: 'white', marginBottom: 20 }}>Mail</label>
                                   <div className="d-flex flex-column align-items-center">
                                        <label style={{ color: 'white' }}>brandonprogamer02@gmail.com</label>
                                        <label style={{ color: 'white' }}>20197875@itla.edu.do</label>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="col-12 col-md-6 my-5 mt-0 d-flex justify-content-center align-items-center " >
                         <img src={githubImage} alt='personal telephone image' className='' style={{ width: '20%' }} />
                         <div className='d-flex flex-column flex-wrap justify-content-around align-items-center w-50'
                              style={{ marginLeft: 20 }}
                         >
                              <label style={{ color: 'white', marginBottom: 20 }}>Github</label>
                              <a style={{ color: 'white' }} href='https://github.com/brandonprogamer02' target='_blank'>https://github.com/brandonprogamer02</a>
                         </div>
                    </div>
                    <div className="col-12 col-md-6 my-5 mt-0 d-flex justify-content-center align-items-center" >
                         <img src={linkedinImage} alt='personal telephone image' className='' style={{ width: '20%' }} />
                         <div className='d-flex flex-column flex-wrap justify-content-around align-items-center w-50'
                              style={{ marginLeft: 20 }}
                         >
                              <label style={{ color: 'white', marginBottom: 20 }}>Linkedin</label>
                              <a style={{ color: 'white', width: '100%' }}
                                   target='_blank'
                                   href='https://www.linkedin.com/in/brandon-fernandez-mejia-07356b1b5'>https://www.linkedin.com/in/brandon-fernandez-mejia-07356b1b5</a>
                         </div>
                    </div>
               </div >
               {/* CIRCLE BORDER */}

               <img src={darkBorderImage} alt=" dark image" style={{ transform: 'rotate(180deg)', marginTop: -22, position: 'relative', width: 'calc(100% + 60px)', right: 13 }} />

          </>
     )
}

export default Contact;
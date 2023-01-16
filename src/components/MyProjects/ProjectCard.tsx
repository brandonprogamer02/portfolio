import React from 'react';
import { IProjectObject } from '.';
import linkImage from '../../images/link.svg';
import youtubeImage from '../../images/youtube.png';
// import { Carrousel } from './Carrousel';
// import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';

import './style.css';

interface IProps extends IProjectObject { };

function ProjectCard({ link, nameProject, pathImages, linkYoutubeVideo, description }: IProps) {
     if (!pathImages.length) {
          return <div>You must pass an image</div>
     }

     return (
          <div className='' style={{ transform: 'scale(1)', width: '100%' }}>
               <div className='d-flex justify-content-center my-4'>
                    {link && <img src={linkImage} alt="link" className='hover' style={{ width: 30 }} onClick={() => window.open(link)} />}

                    {linkYoutubeVideo && <img src={youtubeImage} alt="link" className='hover' style={{ width: 30, marginLeft: 10 }} onClick={() => window.open(link)} />}
                    <label style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }} className='mx-2'>
                         {nameProject}
                    </label>
               </div>
               <p style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{description}</p>
               {pathImages.length > 1 ? (
                    <div className='border' style={{}}>
                         <Carousel dynamicHeight={false} className='' showArrows showThumbs>
                              {pathImages.map((image, index) => (
                                   <div>
                                        <img src={image} alt={index.toString()} />
                                   </div>
                              ))}
                         </Carousel>
                    </div>
               ) : (
                    <img src={pathImages[0]} alt="chat app" className='w-100' style={{ borderRadius: 20 }} />
               )}


          </div>
     )
}

export default ProjectCard;
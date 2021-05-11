import React from 'react';
import { IProjectObject } from '.';
import linkImage from '../../images/link.svg';
import youtubeImage from '../../images/youtube.png';
import './style.css';

interface IProps extends IProjectObject {

}

function ProjectCard({ link, nameProject, pathImage, linkYoutubeVideo }: IProps) {

     return (
          <div className=''>
               <img src={pathImage} alt="chat app image" className='w-100' style={{ borderRadius: 20 }} />
               <div className='d-flex justify-content-center my-4'>
                    <img src={linkImage} alt="link image" className='hover' style={{ width: 30 }} onClick={() => window.open(link)} />
                    {linkYoutubeVideo && <img src={youtubeImage} alt="link image" className='hover' style={{ width: 30, marginLeft: 10 }} onClick={() => window.open(linkYoutubeVideo)} />}
                    <label style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }} className='mx-2'>
                         {nameProject}
                    </label>
               </div>
          </div>
     )
}

export default ProjectCard;
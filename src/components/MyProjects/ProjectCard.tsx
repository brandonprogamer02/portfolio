import React from 'react';
import { IProjectObject } from '.';
import linkImage from '../../images/link.svg';
import './style.css';

interface IProps extends IProjectObject { }

function ProjectCard({ link, nameProject, pathImage }: IProps) {

     return (
          <div className=''>
               <img src={pathImage} alt="chat app image" className='w-100' style={{ borderRadius: 20 }} />
               <div className='d-flex justify-content-center my-4'>
                    <img src={linkImage} alt="link image" className='hover' style={{ width: 30 }} onClick={() => window.open(link)} />
                    <label style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }} className='mx-2'>
                         {nameProject}
                    </label>
               </div>
          </div>
     )
}

export default ProjectCard;
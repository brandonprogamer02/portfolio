import React from 'react';
import darkBorderImage from '../../images/borderDark.svg';
import ProjectCard from './ProjectCard';
import chatAppImage from '../../images/chat-app.png';
import gestyAppImage from '../../images/gesty-app.png';
import minerdAppImage from '../../images/minerd-app.png';
import quizAppImage from '../../images/quizz-app.png';
import socialMediaDashboardLayourImage from '../../images/social-media-dashboard-layout.png';
import takeNotesAppImage from '../../images/take-notes.png';
import './style.css';
import { relative } from 'path';

export interface IProjectObject {
     pathImage: string,
     nameProject: string,
     link: string
}


function MyProjects() {
     const arrayProjects: Array<IProjectObject> = [
          {
               pathImage: chatAppImage,
               nameProject: 'Real Time Chat Aplication',
               link: 'https://brandox-chat-app-frontend.herokuapp.com/'
          },
          {
               pathImage: gestyAppImage,
               nameProject: 'Gesty Aplication',
               link: 'https://gesty-app.netlify.app/'
          },
          {
               pathImage: minerdAppImage,
               nameProject: 'Minerd Teachers Aplication',
               link: 'https://minerd-teacher-app.netlify.app/'
          }
          ,
          {
               pathImage: quizAppImage,
               nameProject: 'Quizzes Aplication',
               link: 'https://brandox-quizz-app.netlify.app/'
          }
          ,
          {
               pathImage: socialMediaDashboardLayourImage,
               nameProject: 'Social Media Dashboard Layout',
               link: 'https://layouts-responsive.netlify.app/'
          }
          ,
          {
               pathImage: takeNotesAppImage,
               nameProject: 'Take Notes Aplication',
               link: 'https://brandox-deploy-apps.netlify.app/notes-project/index.html'
          }
     ];


     return (
          <div className="row" >
               <div>
                    <img src={darkBorderImage} alt="border dark image" style={{ marginBottom: -22, position: 'relative', width: 'calc(100% + 60px)', right: 13 }} />

               </div>
               <div style={{ backgroundColor: '#2E135C' }}>

                    <div className="col-12 " >
                         <div style={{ height: 100 }}></div>
                         <h3 style={{ color: '#894FEC', textAlign: 'center' }}>My Projects</h3>
                    </div>

                    <>
                         {arrayProjects.map(project => (
                              <div className="col-12 my-3">
                                   <div className='w-75 m-auto' >
                                        <ProjectCard pathImage={project.pathImage} nameProject={project.nameProject}
                                             link={project.link}
                                        />
                                   </div>
                              </div>
                         ))}
                    </>
               </div>
               <div>
                    <img src={darkBorderImage} alt="border dark image" style={{ transform: 'rotate(180deg)', marginTop: -22, position: 'relative', width: 'calc(100% + 60px)', right: 13 }} />

               </div>

          </div>
     )
}

export default MyProjects;
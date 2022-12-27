import React from 'react';
import darkBorderImage from '../../images/borderDark.svg';
import ProjectCard from './ProjectCard';
import chatAppImage from '../../images/chat-app.png';
import gestyAppImage from '../../images/gesty-app.png';
// import minerdAppImage from '../../images/minerd-app.png';
import quizAppImage from '../../images/quizz-app.png';
// import socialMediaDashboardLayourImage from '../../images/social-media-dashboard-layout.png';
import takeNotesAppImage from '../../images/take-notes.png';
import medsImage from '../../images/meds.png';
import viableImage from '../../images/viable.jpeg';
import dhnImage from '../../images/dhn.jpeg';
import barberyApp1Image from '../../images/barbery-app-1.png';
import barberyApp2Image from '../../images/barbery-app-2.png';
import barberyApp3Image from '../../images/barbery-app-3.png';
import pacomePortal1Image from '../../images/pacome-portal-1.png';
import pacomePortal2Image from '../../images/pacome-portal-2.png';
import pacomePortal3Image from '../../images/pacome-portal-3.png';
import pacomeBackoffice1Image from '../../images/pacome-backoffice-1.png';
import pacomeBackoffice2Image from '../../images/pacome-backoffice-2.png';
import pacomeBackoffice3Image from '../../images/pacome-backoffice-3.png';
import gobDoPortal1Image from '../../images/gobdo-portal-1.png';
import gobDoPortal2Image from '../../images/gobdo-portal-2.png';
import gobDoPortal3Image from '../../images/gobdo-portal-3.png';
import gobDoBackoffice1Image from '../../images/gobdo-backoffice-1.png';
import gobDoBackoffice2Image from '../../images/gobdo-backoffice-2.png';
import gobDoBackoffice3Image from '../../images/gobdo-backoffice-3.png';

import './style.css';

export interface IProjectObject {
     pathImages: string[],
     nameProject: string,
     link?: string,
     linkYoutubeVideo?: string
}


function MyProjects() {
     const arrayProjects: Array<IProjectObject> = [
          {
               pathImages: [barberyApp1Image, barberyApp2Image, barberyApp3Image],
               nameProject: 'Barbery App by Brandox02',
               link: 'https://play.google.com/store/apps/details?id=com.brandox02.app',
          },
          {
               pathImages: [gobDoPortal1Image, gobDoPortal2Image, gobDoPortal3Image],
               nameProject: 'Gob.do Portal',
               link: 'https://www.gob.do/',
          },
          {
               pathImages: [gobDoBackoffice1Image, gobDoBackoffice2Image, gobDoBackoffice3Image],
               nameProject: 'Gob.do Backoffice',
               link: 'https://gob-do-backoffice.www.gob.do',
          },
          {
               pathImages: [pacomePortal1Image, pacomePortal2Image, pacomePortal3Image],
               nameProject: 'Pacome Portal',
               link: '',
          },
          {
               pathImages: [pacomeBackoffice1Image, pacomeBackoffice2Image, pacomeBackoffice3Image],
               nameProject: 'Pacome Backoffice',
               link: '',
          },
          {
               pathImages: [medsImage],
               nameProject: 'Meds Gravitas System',
               link: 'https://test.meds.com.do/',
          },
          {
               pathImages: [dhnImage],
               nameProject: 'Digital Health Network(DHN) System',
               link: 'https://app.dhn.com.do/',
          },
          {
               pathImages: [viableImage],
               nameProject: 'Viable System',
          },
          {
               pathImages: [chatAppImage],
               nameProject: 'Real Time Chat Aplication',
               link: 'https://brandox-chat-app-frontend.herokuapp.com/',
               linkYoutubeVideo: 'https://youtu.be/x1RH4_5huf8'
          },
          {
               pathImages: [gestyAppImage],
               nameProject: 'Gesty Aplication',
               link: 'https://gesty-app.netlify.app/'
          },
          {
               pathImages: [quizAppImage],
               nameProject: 'Quizzes Aplication',
               link: 'https://brandox-quizz-app.netlify.app/'
          }
          // {
          //      pathImages: [minerdAppImage],
          //      nameProject: 'Minerd Teachers Aplication',
          //      link: 'https://minerd-teacher-app.netlify.app/'
          // },
          // {
          //      pathImages: [socialMediaDashboardLayourImage],
          //      nameProject: 'Social Media Dashboard Layout',
          //      link: 'https://layouts-responsive.netlify.app/'
          // }
          ,
          {
               pathImages: [takeNotesAppImage],
               nameProject: 'Take Notes Aplication',
               link: 'https://brandox-deploy-apps.netlify.app/notes-project/index.html'
          }
     ];


     return (
          <div className="row" >
               <div>
                    <img src={darkBorderImage} alt="border dark" style={{ marginBottom: -22, position: 'relative', width: 'calc(100% + 60px)', right: 13 }} />

               </div>
               <div style={{ backgroundColor: '#2E135C' }}>

                    <div className="col-12  " >
                         <div style={{ height: 40 }}></div>
                         <h3 style={{ color: '#894FEC', textAlign: 'center' }}>My Projects</h3>
                         {/* <div style={{ height: 20 }}></div> */}
                         {/* <div className='d-flex justify-content-center align-items-center mt-5'>
                              <h6 style={{ color: 'white', textAlign: 'center' }} className=''>All Web Projects Link: </h6>
                              <img src={linkImage} alt="link" style={{ marginLeft: 15, width: 30 }} className='hover'
                                   onClick={() => window.open('https://brandox-deploy-apps.netlify.app/')}
                              />
                         </div> */}
                    </div>
                    <div>
                         {arrayProjects.map(project => (
                              <div className="col-12 my-5">
                                   <div className='w-75 m-auto' >
                                        <ProjectCard
                                             pathImages={project.pathImages}
                                             nameProject={project.nameProject}
                                             link={project.link}
                                             linkYoutubeVideo={project.linkYoutubeVideo}
                                        />
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
               <div>
                    <img src={darkBorderImage} alt="border dark" style={{ transform: 'rotate(180deg)', marginTop: -22, position: 'relative', width: 'calc(100% + 60px)', right: 13 }} />

               </div>

          </div>
     )
}

export default MyProjects;
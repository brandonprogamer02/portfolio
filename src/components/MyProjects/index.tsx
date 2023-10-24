import React from 'react';
import darkBorderImage from '../../images/borderDark.svg';
import ProjectCard from './ProjectCard';
// import chatAppImage from '../../images/chat-app.png';
// import gestyAppImage from '../../images/gesty-app.png';
// import minerdAppImage from '../../images/minerd-app.png';
// import quizAppImage from '../../images/quizz-app.png';
// import socialMediaDashboardLayourImage from '../../images/social-media-dashboard-layout.png';
// import takeNotesAppImage from '../../images/take-notes.png';
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
     description?: string;
}


function MyProjects() {
     const arrayProjects: Array<IProjectObject> = [
          {
               pathImages: [barberyApp1Image, barberyApp2Image, barberyApp3Image],
               nameProject: 'Barbery App by Brandox02',
               link: 'https://play.google.com/store/apps/details?id=com.brandox02.app',
               description: `The Brandox Barbery app is designed to enhance the services offered by barbers by simplifying the appointment scheduling process for their clients. It offers a user-friendly mobile application that enables virtual appointment scheduling. Barbers can set up the services they offer, specifying their duration and price, as well as their weekly availability. Users have the freedom to access these features, allowing them to view information and book their appointments conveniently.`
          },
          {
               pathImages: [gobDoPortal1Image, gobDoPortal2Image, gobDoPortal3Image, gobDoBackoffice1Image, gobDoBackoffice2Image, gobDoBackoffice3Image],
               nameProject: 'Gob.do',
               link: 'https://www.gob.do/',
               description: `
               Gob.do is a large-scale project by the Dominican government aimed at eliminating bureaucracy, paperwork, and in-person processes in state services. It achieves this by virtualizing many tedious procedures to provide convenience to citizens. The project includes various modules for handling transactional, interactive, and informational services, managing institutions, citizen requests, and complaints. It also offers personalized forms for each service, field masks, and rules for form fields, among other functionalities. "Gob.do" primarily consists of two applications: the backoffice and the portal. `
          },
          {
               pathImages: [pacomePortal1Image, pacomePortal2Image, pacomePortal3Image, pacomeBackoffice1Image, pacomeBackoffice2Image, pacomeBackoffice3Image],
               nameProject: 'Pacome',
               link: '',
               description: `


Pacome is a food ordering system that offers features like creating personalized menus for various types of dishes, including daily specials, bakery items, and more, with the flexibility to configure different culinary directions. It also manages orders, roles for different types of users (employees, businesses, and administrators), and general parameters like daily order time limits and order confirmation time. The system consists of two applications: the backoffice and the portal.`
          },

          {
               pathImages: [medsImage],
               nameProject: 'Meds Gravitas System',
               link: 'https://test.meds.com.do/',
               description: `MEDS, which is used by the company of the same name, is a medical system that allows you to schedule medical appointments for both insured and uninsured patients. It includes a point of sale system for processing products, procedures, and analyses that patients wish to undergo. Additionally, it features accounting modules for managing the company's financial results. The system also includes modules for purchase orders and inventory, which were significantly developed by the author.`
          },
          {
               pathImages: [dhnImage],
               nameProject: 'Digital Health Network(DHN) System',
               link: 'https://app.dhn.com.do/',
               description: `DHN is a system developed for a company with the same name. It serves as an intermediary between pharmacies and health insurance providers (ARS). The system is designed to process authorizations and pre-authorizations from various medical entities, ensuring the security and consistency of transactions for ARS. It also offers auditing services for these entities.`
          },
          {
               pathImages: [viableImage],
               nameProject: 'Viable System',
               description: `VIABLE is a system developed for the company with the same name. Its primary function is to facilitate product sales and process authorizations centrally. It also handles inventory management, product stock, product transfers between branches, management of damaged and expired products, suppliers, and accounting modules.`
          },
          // {
          //      pathImages: [chatAppImage],
          //      nameProject: 'Real Time Chat Aplication',
          //      link: 'https://brandox-chat-app-frontend.herokuapp.com/',
          //      linkYoutubeVideo: 'https://youtu.be/x1RH4_5huf8',
          //      description: 'Este es una aplicación simple de mensajeria en tiempo real la cual sirve para comunicar personas desde distintos dispositivos electrónicos.'
          // },
          // {
          //      pathImages: [gestyAppImage],
          //      nameProject: 'Gesty Aplication',
          //      link: 'https://gesty-app.netlify.app/',
          //      description: 'GestyApp es una aplicación para calcular el indice académico cuatrimestral e histórico de los estudiantes de la carrera de software de ITLA.'
          // },
          // {
          //      pathImages: [quizAppImage],
          //      nameProject: 'Quizzes Aplication',
          //      link: 'https://brandox-quizz-app.netlify.app/',
          // }
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
          // ,
          // {
          //      pathImages: [takeNotesAppImage],
          //      nameProject: 'Take Notes Aplication',
          //      link: 'https://brandox-deploy-apps.netlify.app/notes-project/index.html'
          // }
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
                                             description={project.description}
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
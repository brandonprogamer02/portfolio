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
     description?: string;
}


function MyProjects() {
     const arrayProjects: Array<IProjectObject> = [
          {
               pathImages: [barberyApp1Image, barberyApp2Image, barberyApp3Image],
               nameProject: 'Barbery App by Brandox02',
               link: 'https://play.google.com/store/apps/details?id=com.brandox02.app',
               description: 'Brandox barbery app, es un proyecto que pretende agilizar el servicio brindado por los barberos a sus clientes, ofreciéndoles la posibilidad de poder virtualizar primordialmente el proceso de agenda de citas de sus clientes, fácilmente en una aplicación intuitiva, sencilla y móvil. También en la misma el barbero puede configurar los cortes de pelo que brinda como servicios, con su duración, precio y demás. Como también configurar los horarios en los que esta disponible semanalmente. Por otra parte el usuario es libre de acceder a todos estos módulos para fines de consumir su información y agendar sus propias citas.'
          },
          {
               pathImages: [gobDoPortal1Image, gobDoPortal2Image, gobDoPortal3Image],
               nameProject: 'Gob.do Portal',
               link: 'https://www.gob.do/',
               description: 'gob.do es un proyecto de gran escala del gobierno dominicano que pretende erradicar la burocracia, trámites y papeles de los servicios del estado, esto lo logra virtualizando muchos procesos tediosos que son totalmente presenciales para así poder llevar la comodidad a los ciudadanos. Este cuenta con muchos módulos de manejo de servicios transaccionales, interactivos e informativos; manejo de instituciones, manejo de las solicitudes hechas por los ciudadanos a los servicios, manejos de las reclamaciones hechas por los ciudadanos a los servicios. Manejo de formularios personalizados para cada servicio, manejo de máscaras para los campos de dichos formularios, manejo de reglas para los campos de los formularios anteriormente mencionados. Entre otras muchas funcionalidades más. Este conta principalmente de dos aplicativos el backoffice y el portal. En este caso este es el portal.'
          },
          {
               pathImages: [gobDoBackoffice1Image, gobDoBackoffice2Image, gobDoBackoffice3Image],
               nameProject: 'Gob.do Backoffice',
               link: 'https://gob-do-backoffice.www.gob.do',
               description: 'gob.do es un proyecto de gran escala del gobierno dominicano que pretende erradicar la burocracia, trámites y papeles de los servicios del estado, esto lo logra virtualizando muchos procesos tediosos que son totalmente presenciales para así poder llevar la comodidad a los ciudadanos. Este cuenta con muchos módulos de manejo de servicios transaccionales, interactivos e informativos; manejo de instituciones, manejo de las solicitudes hechas por los ciudadanos a los servicios, manejos de las reclamaciones hechas por los ciudadanos a los servicios. Manejo de formularios personalizados para cada servicio, manejo de máscaras para los campos de dichos formularios, manejo de reglas para los campos de los formularios anteriormente mencionados. Entre otras muchas funcionalidades más. Este conta principalmente de dos aplicativos el backoffice y el portal. En este caso este es el backoffice.'
          },
          {
               pathImages: [pacomePortal1Image, pacomePortal2Image, pacomePortal3Image],
               nameProject: 'Pacome Portal',
               link: '',
               description: 'Pacome es un sistema de pedido de comidas el cual cuenta con funcionalidades tales como creación de menu personalizados de distintas indoles para platos del dia, panaderia, en fin tantas direcciones culinarias como se desee crear porque es configurable; manejo de órdenes, pedidos, roles entre usuarios empleados, empresariales, y administradores, configuración de parámetros generales como tiempo para poder ordenar diario, tiempo para que una orden sea confirmada después que se pide, entre otros parámetros; así como muchas otras funcionalidades y detalles más. Este consta de dos aplicativos el backoffice y el porta. En este caso este es el Portal'
          },
          {
               pathImages: [pacomeBackoffice1Image, pacomeBackoffice2Image, pacomeBackoffice3Image],
               nameProject: 'Pacome Backoffice',
               link: '',
               description: 'Pacome es un sistema de pedido de comidas el cual cuenta con funcionalidades tales como creación de menu personalizados de distintas indoles para platos del dia, panaderia, en fin tantas direcciones culinarias como se desee crear porque es configurable; manejo de órdenes, pedidos, roles entre usuarios empleados, empresariales, y administradores, configuración de parámetros generales como tiempo para poder ordenar diario, tiempo para que una orden sea confirmada después que se pide, entre otros parámetros; así como muchas otras funcionalidades y detalles más. Este consta de dos aplicativos el backoffice y el porta. En este caso este es el Backoffice.'
          },
          {
               pathImages: [medsImage],
               nameProject: 'Meds Gravitas System',
               link: 'https://test.meds.com.do/',
               description: 'MEDS que es el sistema que utiliza la empresa del mismo nombre, este es un sistema médico en el que puedes agendar citas médicas de ars o de pacientes no asegurados, cuenta con un punto de ventas donde se pueden procesar los productos/procedimientos/análisis que el paciente desea elaborarse, también cuenta con módulos de contabilidad para el manejo de los resultados financieros que genera la empres. Así como también los módulos de órdenes de compra e inventario que fui yo que los desarrollé en gran medida.'
          },
          {
               pathImages: [dhnImage],
               nameProject: 'Digital Health Network(DHN) System',
               link: 'https://app.dhn.com.do/',
               description: 'DHN es un sistema para la empresa del mismo nombre, está destinado para ser un intermediario entre las farmacias y las ars, de manera que procesa las autorizaciones & pre-autorizaciones de las distintas entidades médicas para así poderle brindar cierta seguridad y congruencia de transacciones a las ars, asi como tambien posee servicios de auditoria para las mismas.'
          },
          {
               pathImages: [viableImage],
               nameProject: 'Viable System',
               description: 'VIABLE es el sistema para la empresa del mismo nombre, su principal función es la de poder expender productos, procesar autorizaciones de manera central, llevar las funciones de manejo de inventario, stock de productos, transferencias de productos entre sucursales, manejo de inventario de productos en mal estado, manejo de inventario de productos vencidos, suplidores, proveedores, así como también los módulos de contabilidad.'
          },
          {
               pathImages: [chatAppImage],
               nameProject: 'Real Time Chat Aplication',
               link: 'https://brandox-chat-app-frontend.herokuapp.com/',
               linkYoutubeVideo: 'https://youtu.be/x1RH4_5huf8',
               description: 'Este es una aplicación simple de mensajeria en tiempo real la cual sirve para comunicar personas desde distintos dispositivos electrónicos.'
          },
          {
               pathImages: [gestyAppImage],
               nameProject: 'Gesty Aplication',
               link: 'https://gesty-app.netlify.app/',
               description: 'GestyApp es una aplicación para calcular el indice académico cuatrimestral e histórico de los estudiantes de la carrera de software de ITLA.'
          },
          {
               pathImages: [quizAppImage],
               nameProject: 'Quizzes Aplication',
               link: 'https://brandox-quizz-app.netlify.app/',
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
import React from 'react';
import meImage from '../../images/me.jpg'


function AboutMe() {

     return (
          <div className="row mb-5 mt-3" >
               <div className="col-12 " >
                    <h3 style={{ color: '#632CC2', textAlign: 'center', marginTop: 20, fontWeight: 'bold', marginBottom: 40 }} >
                         Qui suis-je?
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
                              Je m'appelle Brandon Saul Fernandez Mejia, je suis un développeur logiciel jeune et passionné depuis 1 an et demi, j'aime beaucoup pouvoir développer des solutions efficaces, fonctionnelles et présentables pour les différents problèmes de la vie quotidienne ainsi que pouvoir faciliter moi-même et les autres vivent grâce à mes connaissances dans le monde des logiciels.
                                   </p>
                         <p style={{ fontSize: 20 }}>
                              Je suis aussi une personne très curieuse qui aime essayer différentes choses et être toujours à jour avec ce qui m'entoure. en plus d'être toujours actif et ouvert à considérer et à apprendre les nouvelles technologies.
                                   </p>
                         <p style={{ fontSize: 20 }}>Étudiant de l'Institut technologique des Amériques (ITLA).</p>
                    </div>
               </div>

          </div>
     )
}

export default AboutMe;
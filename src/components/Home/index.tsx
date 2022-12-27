import React from 'react';
import homeBackgroundImage from '../../images/homeImage.png'

function Home() {

     return (
          <div className="row" id='home'>
               <div className="col-12" >

                    <img src={homeBackgroundImage} className="" alt="home background"
                         style={{ top: -10, position: 'relative', right: 20, width: 'calc(100% + 50px)' }}
                    />
               </div>
          </div>
     )
}

export default Home;
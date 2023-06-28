import React from 'react';
import image1 from '../Assets/crime8.jpg';
import "../styles/Home.css";
import { Parallax } from "react-parallax";
import Feature from './Features';
function Home() {
    return (
      <div className="home">
       
        <Parallax bgImage={image1} strength={500} className="back">
          <h2 className='firsth2'>
            <span> Crime Analysis and</span><br/>
            <span className='secondh2' >Visualization</span>
           </h2> 
           <p>“We are often criminals in the eyes of the earth, not only for having committed crimes, but because we know that crimes have been committed.”</p>
        </Parallax>
        <div>
        <Feature/>
        </div>
        </div>
       
    );
  }
  
  export default Home;
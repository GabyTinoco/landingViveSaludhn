import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import unionEuropea from '../assets/social-proof/union_europea.png'
import socialSkin from '../assets/social-proof/social-skin.jpg'
import paliativosSinFrontera from '../assets/social-proof/paliativos_sin_fronteras.jpg'
import asociativosTelemedicina from '../assets/social-proof/asociacion_telemedicina.jpg'
import redInformaticaSalud from '../assets/social-proof/red_informatica_salud.png'
import desicomEhealth from '../assets/social-proof/desicom_ehealth.png'


const SocialProof = props => {
  const handleOnDragStart = (e) => e.preventDefault()
  
 
  return (
    <section className="social-proof" id = "alianza"> 
    <h1>Alianzas</h1>   
       <AliceCarousel 
       mouseTrackingEnabled
       buttonsDisabled = {true}
       infinite = {true}
       autoPlay = {true}
       autoPlayInterval={2000}
       responsive={{ "0": { items: 3 } }}
      
       >
        <img src= {desicomEhealth} onDragStart={handleOnDragStart} className="yours-custom-class" width = "200" />
        <img src= {redInformaticaSalud} onDragStart={handleOnDragStart} className="yours-custom-class" width = "200" />
        <img src={unionEuropea} onDragStart={handleOnDragStart} className="yours-custom-class"  width = "200"/>
        <img src={socialSkin} onDragStart={handleOnDragStart} className="yours-custom-class" width = "200" />
        <img src={paliativosSinFrontera} onDragStart={handleOnDragStart} className="yours-custom-class" width = "200" />
        <img src= {asociativosTelemedicina} onDragStart={handleOnDragStart} className="yours-custom-class" width = "200" />
      </AliceCarousel>
    </section>
  )
};

export default SocialProof;

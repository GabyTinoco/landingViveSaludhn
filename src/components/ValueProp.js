import React from 'react';
import Button from "./Button";

const ValueProp = props => {

  return (
    <section className="value-prop" id = "quienes-somos">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>¿Quiénes somos?</h1>
          <p className="main-subtitle">Somos una organización formada por personal de salud para 
          ofrecer un servicio de salud integral y accesible  a nuestros usuarios, 
          empleando nuevas tecnologías.
           </p>
           <p className="main-subtitle">Entre los servicios que ofrecemos contamos con plataformas de telemedicina, 
             dispositivos biomédicos y capacitaciones virtuales.
           </p>
           <p className="main-subtitle">
           Nuestra visión es ser la mejor alternativa de servicios de salud en Honduras.
           </p>
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
};

export default ValueProp;

import React from 'react';
import adjuntar from '../assets/adjuntar_archivo.svg'
import registro from '../assets/registro_consultas.svg'
import videollamada from '../assets/videollamada.svg'
import enfermedades from '../assets/enfermedades.svg'
import mantenimiento from '../assets/mantenimiento.svg'
import citasMedicas from '../assets/citas_servicios_vivesalud.svg'

const ProductFeatures = props => {

  return (
    <section className="product-features" id="caracteristicas">
      <h1>Características de la plataforma</h1>
      <div className="core-features">
        <div className="core-feature-1">
          <div className="core-feature-1-image">
            <svg className="background-feature-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill-opacity="0.7" fill="#08BDBA" d="M55.2,-60.8C66.2,-44.2,66.2,-22.1,65.2,-1C64.2,20.2,62.3,40.3,51.3,50.8C40.3,61.3,20.2,62,-1.2,63.2C-22.5,64.4,-45.1,66,-58.1,55.5C-71.2,45.1,-74.9,22.5,-71.8,3C-68.8,-16.4,-59,-32.9,-46,-49.5C-32.9,-66.1,-16.4,-83,2.8,-85.8C22.1,-88.6,44.2,-77.5,55.2,-60.8Z" transform="translate(100 100)" />
            </svg>
           <img src ={adjuntar} className ="icon-paint" width = "120" /> 
          </div>

          <p>Capacidad de adjuntar archivos imágenes, audio, video o PDF.</p>
        </div>
        <div className="core-feature-3">
          <div className="core-feature-3-image">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FA4D56" fill-opacity="0.8" d="M47.7,-57.2C59,-47.3,63.6,-29.7,68.3,-10.9C72.9,7.9,77.8,27.8,71.7,44.2C65.6,60.7,48.6,73.6,33.3,69.7C18.1,65.7,4.7,44.8,-13.2,37.7C-31.1,30.5,-53.5,37.2,-57.9,32.2C-62.3,27.2,-48.6,10.5,-44.1,-6.5C-39.6,-23.5,-44.1,-40.7,-38.3,-51.5C-32.5,-62.4,-16.2,-66.7,1,-67.9C18.2,-69,36.3,-67,47.7,-57.2Z" transform="translate(100 100)" />
            </svg>
            <img src ={registro} className ="icon-paint" width = "120" /> 
          </div>
          <p>Registro de consultas anteriores</p>
        </div>
        <div className="core-feature-2">
          <div className="core-feature-1-image">
            <svg viewBox="0 20 180 180" xmlns="http://www.w3.org/2000/svg" className="background-feature-1">
              <path fill="#F1C21B" fill-opacity="0.7" d="M48.2,-46.1C57.2,-39.2,55.7,-19.6,54.6,-1.1C53.5,17.5,53,35,44,43C35,51.1,17.5,49.6,-1.9,51.5C-21.2,53.4,-42.5,58.5,-56.8,50.5C-71.1,42.5,-78.5,21.2,-71.3,7.2C-64.1,-6.8,-42.3,-13.6,-28,-20.5C-13.6,-27.3,-6.8,-34.1,6.4,-40.5C19.6,-46.9,39.2,-52.9,48.2,-46.1Z" transform="translate(100 100)" />
            </svg>
            <img src ={videollamada} className ="icon-paint" width = "120" /> 
          </div>
          <p>Videollamadas integradas a la plataforma</p>
        </div>
      </div>
      <div className="core-features">
      <div className="core-feature-1">
          <div className="core-feature-1-image">
            <svg className="background-feature-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill-opacity="0.7" fill="#08BDBA" d="M55.2,-60.8C66.2,-44.2,66.2,-22.1,65.2,-1C64.2,20.2,62.3,40.3,51.3,50.8C40.3,61.3,20.2,62,-1.2,63.2C-22.5,64.4,-45.1,66,-58.1,55.5C-71.2,45.1,-74.9,22.5,-71.8,3C-68.8,-16.4,-59,-32.9,-46,-49.5C-32.9,-66.1,-16.4,-83,2.8,-85.8C22.1,-88.6,44.2,-77.5,55.2,-60.8Z" transform="translate(100 100)" />
            </svg>
            <img src ={mantenimiento} className ="icon-paint" width = "120" /> 
          </div>
          <p>Mantenimiento y capacitaciones de la plataforma.</p>
        </div>
        <div className="core-feature-2">
          <div className="core-feature-1-image">
            <svg viewBox="0 20 180 180" xmlns="http://www.w3.org/2000/svg" className="background-feature-1">
              <path fill="#FA4D56" fill-opacity="0.7" d="M48.2,-46.1C57.2,-39.2,55.7,-19.6,54.6,-1.1C53.5,17.5,53,35,44,43C35,51.1,17.5,49.6,-1.9,51.5C-21.2,53.4,-42.5,58.5,-56.8,50.5C-71.1,42.5,-78.5,21.2,-71.3,7.2C-64.1,-6.8,-42.3,-13.6,-28,-20.5C-13.6,-27.3,-6.8,-34.1,6.4,-40.5C19.6,-46.9,39.2,-52.9,48.2,-46.1Z" transform="translate(100 100)" />
            </svg>
            <img src ={citasMedicas} className ="icon-paint" width = "120" /> 
          </div>
          <p>Coordinación de citas y servicios de parte del equipo de Vive Salud.</p>
        </div>
        <div className="core-feature-3">
          <div className="core-feature-3-image">
            <svg viewBox="0 20 180 180" xmlns="http://www.w3.org/2000/svg"  className="background-feature-1" >
              <path fill="#F1C21B" fill-opacity="0.7" d="M48.2,-46.1C57.2,-39.2,55.7,-19.6,54.6,-1.1C53.5,17.5,53,35,44,43C35,51.1,17.5,49.6,-1.9,51.5C-21.2,53.4,-42.5,58.5,-56.8,50.5C-71.1,42.5,-78.5,21.2,-71.3,7.2C-64.1,-6.8,-42.3,-13.6,-28,-20.5C-13.6,-27.3,-6.8,-34.1,6.4,-40.5C19.6,-46.9,39.2,-52.9,48.2,-46.1Z" transform="translate(100 100)" />
            </svg>
            <img src ={enfermedades} className ="icon-paint" width = "120" /> 
          </div>
          <p>Codificación de enfermedades, procedimientos  y medicamentos por medio de estándares internacionales</p>
        </div>
      </div>
    </section>
    
  )
};

export default ProductFeatures;

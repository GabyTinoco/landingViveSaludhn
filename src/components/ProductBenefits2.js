import React from 'react';
import bioseguridad from '../assets/vive_salud_bioseguridad.png'
import cuidadoCasa from '../assets/vive_salud_cuidado_casa.png'
import visitasMedicas from '../assets/vive_salud_visitas_medica.png'
import pruebasRapidas from '../assets/vivesalud_pruebas_rapidas.png'
import citasMedicas from '../assets/citas_servicios_vivesalud.svg'


const ProductBenefits2 = props => {

  return (
    <section className="product-features" id="servicios">
      <h1> Servicios</h1>
      <div className="core-features">
        <div className="core-feature-1 servicios ">
          <div className="core-feature-1-image">
           <img src ={visitasMedicas} width = "170" /> 
          </div>
          <p>Visitas médicas domiciliarias.</p>
        </div>
        <div className="core-feature-3 servicios">
          <div className="core-feature-3-image">
            <img src ={cuidadoCasa}  width = "170" /> 
          </div>
          <p>Cuidado en casa.</p>
        </div>
        <div className="core-feature-2 servicios">
          <div className="core-feature-1-image">
          <img src ={bioseguridad}  width = "170" /> 
          </div>
          <p>Abordaje en bioseguridad para empresas.</p>
      
        </div>
        <div className="core-feature-2 servicios">
          <div className="core-feature-1-image">
            <img src ={pruebasRapidas} width = "170" /> 
          </div>
          <p>Pruebas rápidas domiciliarias.</p>
        </div>
    </div>
  </section>
  )
};

export default ProductBenefits2;

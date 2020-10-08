import React from 'react';
import Button from "./Button";
import { Link, animateScroll as scroll } from "react-scroll";

const Plataforma = props => {

  return (
    <section className="value-prop" id = "plataforma">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>Nuestra plataforma</h1>
          <p className="main-subtitle"> Permite conectar profesionales de salud de distintas áreas de 
          forma confiable y sencilla, logrando fortalecer tu clínica o establecimiento con otros 
          profesionales sin importar en qué parte del mundo se encuentren. 
           </p>
           <button className = "submmit">
            <Link activeClass="active"to="inscribirse" spy={true} smooth={true} offset={-130} duration={500}>
                Inscribirse
            </Link>
           </button>
        </div>
        <div className="plataforma-photo"></div>
      </div>
    </section>
  )
};

export default Plataforma;

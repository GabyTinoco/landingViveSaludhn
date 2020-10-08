import PropTypes from "prop-types";
import React, { useState } from 'react';
import Backdrop from './BackdropSection';
import { Link, animateScroll as scroll } from "react-scroll";


const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let navClasses = 'nav-links';
  let navItemClasses = 'nav-link-item';
  let burgerClass = "burger";
  let backdropClass = "backdrop";
  if (isOpen) {
    navClasses = 'nav-links nav-active';
    navItemClasses = 'nav-link-item-active';
    burgerClass = "burger toggle";
    backdropClass = "backdrop backdrop-active";

  }

  return (
    <header>
      <Backdrop activeClass={backdropClass} click={toggle} />
      <nav className="navbar">
        <div className="nav-belt">
          <div>
            <h4>
              <Link className="logo" to="/" >
                <div className="logo-image"></div>     
              </Link>
            </h4>
          </div>

          <ul className={navClasses}>
          <Link activeClass="active"to="quienes-somos" spy={true} smooth={true} offset={-70} duration={500}>Quiénes Somos</Link>
          <Link activeClass="active"to="servicios" spy={true} smooth={true} offset={-130} duration={500}>Servicios</Link>
          <Link activeClass="active"to="alianza" spy={true} smooth={true} offset={-130} duration={500}>Alianzas</Link>
          <Link activeClass="active"to="plataforma" spy={true} smooth={true} offset={-130} duration={500}>Plataforma</Link>
          <Link activeClass="active"to="inscribirse" spy={true} smooth={true} offset={-130} duration={500}>Inscribirse</Link>
        
          <Link activeClass="active"to="contactanos" spy={true} smooth={true} offset={-70} duration={500}>Contáctanos</Link>
          </ul>
          <div className={burgerClass} onClick={toggle}>
            <div className="burger-line-1"></div>
            <div className="burger-line-2"></div>
            <div className="burger-line-3"></div>
          </div>
        </div>
      </nav>
    </header>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;

import React from 'react';

const Footer =  ({ siteTitle }) => {

  return (
    <footer className="footer">
      <div className="footer-belt">
        <div className="company-sign">
        &copy; 2020 {siteTitle}
      </div>
        <div className="social-media">
          <a href=" https://www.facebook.com/VIVESALUDHN"><div className="social-facebook">Facebook</div></a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;

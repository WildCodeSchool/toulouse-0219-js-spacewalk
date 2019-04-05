import React, { Component } from 'react';
import './footer.css';
import nasa from './images/logoNasa.png';
import esa from './images/logoEsa.png';
import iss from './images/logoIss.png';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer id="footer">
        <a href="https://www.nasa.gov/">
          <img
            className="logoFooter"
            src={nasa}
            alt="nasa logo"
          />
        </a>
        <a href="http://www.esa.int/fre/ESA_in_your_country/France">
          <img
            className="logoFooter"
            src={esa}
            alt="esa logo"
          />
        </a>
        <a href="https://wheretheiss.at">
          <img
            className="logoFooter"
            src={iss}
            alt="iss logo"
          />
        </a>
      </footer>
    );
  }
}

export default Footer;

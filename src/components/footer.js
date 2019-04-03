import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer id="footer">
        <img className="logoFooter"
          src="https://seeklogo.com/images/N/NASA-logo-9411797223-seeklogo.com.png"
          alt="nasa logo"
        />
        <img className="logoFooter"
          src="https://www.slush.org/wp-content/uploads/2016/11/ESA-logo-500x318.png"
          alt="nasa logo"
        />
        <img className="logoFooter"
          src="https://www.issworld.com/-/media/issworld/www/Images/Media%20Library/Logo/Print%20and%20web/ISS-logo%20at%20white%20background.gif"
          alt="nasa logo"
        />
      </footer>
    );
  }
}

export default Footer;

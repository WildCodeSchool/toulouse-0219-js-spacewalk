import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="sticky-top">
        <Navbar expand="lg" className="navContainer">
          <NavbarBrand href="/" className="active">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="nav" navbar>
              <NavItem>
                <NavLink className="text-center mr-4" href="/">Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-center mr-4" href="/articles">To read later</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-center mr-4" href="/read">Satellites tracker</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;

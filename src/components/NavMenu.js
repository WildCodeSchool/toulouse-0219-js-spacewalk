import React, { Component } from 'react';
import { NavLink as NavRouter } from 'react-router-dom';
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
        <Navbar expand="md" className="navContainer">
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="collapse-container" isOpen={isOpen} navbar>
            <Nav className="nav" navbar>
              <NavItem>
                <NavLink tag={NavRouter} className="text-center" to="/" exact>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavRouter} className="text-center" to="/search">NASA Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={NavRouter} className="text-center" to="/tracker">Satellites Tracker</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;

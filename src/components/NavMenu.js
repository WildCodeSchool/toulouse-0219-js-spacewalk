import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button
} from 'reactstrap';

const searchStyle = {
  color: 'var(--primary-color)'
};

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
      <div>
        <Navbar expand="md" className="navContainer">
          <NavbarBrand href="/">SpaceApp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="navToggler" />
          <Collapse className="navCollapse" isOpen={isOpen} navbar>
            <Nav className="nav" navbar>
              <NavItem className="navItem flex-grow-1">
                <NavLink className="text-center mr-4" href="/">Home</NavLink>
              </NavItem>
              <NavItem className="navItem flex-grow-1">
                <NavLink className="text-center mr-4" href="/articles">Articles</NavLink>
              </NavItem>
              <NavItem className="navItem flex-grow-1">
                <NavLink className="text-center mr-4" href="/read">To read later</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <Input className="input" style={searchStyle} type="text" placeholder="Search" />
              </NavItem>
              <NavItem className="navItem">
                <Button block className="btn" variant="outline-success">Search</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;

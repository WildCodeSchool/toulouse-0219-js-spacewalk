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
          <NavbarBrand href="/">SpaceApp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="nav" navbar>
              <NavItem>
                <NavLink className="text-center mr-4 active" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-center mr-4" href="/articles">Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-center mr-4" href="/read">To read later</NavLink>
              </NavItem>
              <div className="nav-input mr-lg-2">
                <Input type="search" placeholder="Search" />
              </div>
              <div className="nav-btn">
                <Button block type="Submit">Search</Button>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;

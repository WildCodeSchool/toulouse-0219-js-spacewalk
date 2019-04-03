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
  color: 'red'
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
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/articles">Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/read">To read later</NavLink>
              </NavItem>
            </Nav>
            <Input style={searchStyle} type="text" placeholder="Search" />
            <Button variant="outline-success">Search</Button>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;

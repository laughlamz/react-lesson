import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/Cart";


export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                    <Link to="/">Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                    <Link to="/products/">Products</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <CartContext.Consumer>
                    { ({ cartItem }) => <Link to="/carts/">Cart ({cartItem.length})</Link>}
                  </CartContext.Consumer>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
import React from "react";
import { Navbar, Container, Nav, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';

import './navbar.css'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
     
  }

  render() {
    return (
       <Navbar fixed="top" id="navbar"  variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <FontAwesomeIcon icon= {faDog} /> Peluditos Shop<span id="usuario-sub-branm"></span>
            </Navbar.Brand>
            
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>*/}
              </Nav>
              <DropdownButton id="dropdown-basic-button"  title="Usuario" >
                <Dropdown.Header>
                  <Row>
                  <FontAwesomeIcon icon= {faPaw} />
                  </Row>
                  <Row>
                    #USUARIO#
                  </Row>
                </Dropdown.Header>
                <Dropdown.Divider>
                </Dropdown.Divider>
              <Dropdown.Item href="#/action-1">Cerrar sesión</Dropdown.Item>
              
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
              
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

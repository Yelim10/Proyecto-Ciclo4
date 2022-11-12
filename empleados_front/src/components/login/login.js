import React from "react"; //atajo imr
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from 'axios';
import './login.css';
//ccc constructor

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario:'',
      pass:'',
    };
  }
  iniciarSesion(){
    axios.
    
  alert(`usuario: ${this.state.usuario} - password: ${this.state.pass}`); //boton para iniciar sesion
    
  }

  render() {
    return (
      <Container id="login-container" >
        <Row>
          <Col 
          sm="12"
          xs = "12"
          md = {{span:4, offset:4}}
          lg = {{span:4, offset:4}}
          xl = {{span:4, offset:4}}
          >
            <Row>
              <h2>Iniciar Sesión </h2>
            </Row>
            <Row>
                <Col>
              <Form>
                <Form.Group>
                  <Form.Label >Usuario</Form.Label>
                  <Form.Control 
                  onChange = {(e) => 
                  this.setState({ usuario: e.target.value})}
                   />
                   
                </Form.Group>

                <Form.Group>
                  <Form.Label >Contraseña</Form.Label>
                  <Form.Control type="password" 
                  onChange = {(e) => 
                    this.setState({ pass: e.target.value})}
                    />
                    
                </Form.Group>

                <Button
                  variant="danger-"
                  type="submit"
                  onClick = {()=> {
                    this.iniciarSesion();
                  }}
                >
                  Iniciar sesión
                </Button>
              </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        
      </Container>
      
    );
  }
}

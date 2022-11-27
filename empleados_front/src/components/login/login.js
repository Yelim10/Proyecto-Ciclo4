import React from "react"; //atajo imr
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from 'axios';
import app from "../../app.json";
import './login.css';
import {isNull} from 'util';
import Cookies from 'universal-cookie';
import { calculaExtraccionSesion } from "../helper/helper";
import Loading from "../loading/loading";


//import APIHOST from "../../app.json"
//ccc constructor
const{APIHOST} =app;
const cookies = new Cookies();
export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario:'',
      pass:'',
    };
  }
  
  iniciarSesion(){
    this.setState({ loading: true });
    axios.post(`${APIHOST}/usuarios/login`,{
      usuario: this.state.usuario,
      pass: this.state.pass,
    })
    .then((response) =>{
       if (isNull(response.data.token)) {
        alert('usuario y/o contraseña invalidas');
       } else {
        cookies.set('_s', response.data.token, {
          path: '/',
          expires: calculaExtraccionSesion(),
        });
        this.props.history.push(window.open('/empleados'));
       }
       this.setState({ loading: false });

      })

    .catch((err) =>{
      console.log(err);
      this.setState({ loading: false });
    });
}

  render() {
    return (
      <Container id="login-container" >
        <Loading show={this.state.loading}/>
        <Row>
          <Col>
            <Row>
              <h2> Iniciar Sesión </h2>
              </Row>
              <Row>
                  <Col
                  sm="12"
                  xs = "12"
                  md = {{span:4, offset:4}}
                  lg = {{span:4, offset:4}}
                  xl = {{span:4, offset:4}}
            > 
              <Form>
                <Form.Group>
                  <Form.Label >Usuario</Form.Label>
                  <Form.Control
                  onChange={(e)=>
                    this.setState({usuario:e.target.value})
                  } 
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label >Contraseña</Form.Label>
                  <Form.Control 
                  type = "password" 
                  onChange = {(e) => 
                    this.setState({ pass: e.target.value})
                  }
                    />
                    
                </Form.Group>
  
                 <Button 
                 onClick= {() =>{
                 this.iniciarSesion();
                 }} 
                 >
                  Iniciar Sesión
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

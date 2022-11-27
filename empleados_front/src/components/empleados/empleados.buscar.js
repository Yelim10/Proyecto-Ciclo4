import React from 'react';
import { Container, Row  } from 'react-bootstrap';
import './empleados.css';


import DataGrid from '../grid/grid'




const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

  
export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        
    }

    render() { 
        
        return (  
            <Container id="empleados-buscar-container">
                <Row>
                <h1>
                     Buscar Empleados
                </h1>
                </Row>
                    <DataGrid url="/empleados" columns= {columns}/>
                <Row>
               
        
                   </Row>
            </Container>
        );
}}
 
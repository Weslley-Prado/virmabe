import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Horário de funcionamento</h5>
            <p className="funcionamento">  Segunda à Sexta - 08:00 às 18:00 </p> 
            <p className="funcionamento">  Sábado - 08:00 às 13:00 </p> 


          </MDBCol>
          <MDBCol md="6" > 
            <h5 className="title">Contato</h5>
            <p className="funcionamento1">TELEFONE FIXO  (11) 2605.2088
            WHATSAPP ( 11 ) 95555.1110 </p> 

          </MDBCol>
          
         
          <MDBCol md="2">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Empresa</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Produtos</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contato</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://westhightechnology.com.br/"> WHT - West High Technology</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer
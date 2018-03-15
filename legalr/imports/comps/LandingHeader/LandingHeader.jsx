import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Button, Input, InputGroupDropDown, InputGroupButtonDropdown } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import Form from './EmailInput.jsx';
import './LandingHeader.css';

export default class LandingHeader extends Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render () {
    return (
      <div>
      <Container fluid className="Header_Background">
        <Row id="Header_Row1">
          <Col md="12" sm="12" xs="12" className="text-center" id="Header_Col">
              <Col md="12" sm="12" xs="12" className="text-center" id="Logo">
                <h1 className="animated fadeIn">
                  Action made easy.
                </h1>
                <br></br>
              <h4>Learn about the issues that affect you. Make a difference.</h4>
              </Col>
              <Col md="12" sm="12" xs="12" className="text-center" id="alert-signup" >
                <InputGroup>
                  <Button id="GetStartedButton" color="primary" onClick={this.toggle}>Get Started</Button>
                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                   <ModalHeader className="text-center">Sign Up</ModalHeader>
                   <ModalBody toggle={this.toggle} id="ModalBody">
                     <Row>
                       <Col md="12" sm="12" xs="12" className="text-center">
                     <div class="fb-login-button" data-width="200" data-max-rows="1" data-size="large"
                      data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false"
                      data-use-continue-as="false"></div>
                        </Col>
                        <Col md="12" sm="12" xs="12" className="text-center">
                      <p>Or</p>
                         </Col>
                         <Col md="12" sm="12" xs="12" className="text-center">
                           <Button id="GetStartedButton" color="primary" onClick={this.toggle}>Sign Up</Button>
                          </Col>
                          <Col md="12" sm="12" xs="12" className="text-center">
                            <Button id="GetStartedButton" color="primary" onClick={this.toggle}>Sign In</Button>
                           </Col>
                      </Row>
                     <Form />
                   </ModalBody>
                 </Modal>
                </InputGroup>
              </Col>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

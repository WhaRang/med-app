import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';

function SignUp() {

  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Sign Up</h1>
        <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form>
              <Form.Group className="text-left" controlId="formBasicText">
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="text-left" controlId="formBasicText">
                <Form.Label>Surname: </Form.Label>
                <Form.Control type="text" placeholder="Enter surname" />
              </Form.Group>
              <Form.Group className="text-left" controlId="formBasicEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="text-left" controlId="formBasicText">
                <Form.Label>Phone number: </Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>
              <Form.Group className="text-left" controlId="formBasicText">
                <Form.Label>PESEL: </Form.Label>
                <Form.Control type="text" placeholder="Enter PESEL" />
              </Form.Group>
              <Form.Group className="text-left" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="text-left" controlId="formBasicPassword">
                <Form.Label>Repeat password</Form.Label>
                <Form.Control type="password" placeholder="Repeat password" />
              </Form.Group>
              <Form.Group className="text-left" controlId="formBasicDate">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type="date" placeholder="Enter date of birth" />
              </Form.Group>
              <Row className="mt-4">
                <div>
                  <Link to={`/login`}>
                    <Button className="btn-primary-spacing" variant="success btn-block" type="submit">
                      Cancel
                    </Button>
                  </Link>
                  <Link to={`/login`}>
                    <Button className="btn-primary-spacing" variant="success btn-block" type="submit">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignUp;

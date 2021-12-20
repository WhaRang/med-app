import React, { useState, useContext } from 'react';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import DoctorMain from './DoctorMain';
import { UserContext } from '../App';
import PatientMain from './PatientMain';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';

function Login() {

  const history = useHistory();

  const { token, tokenHandler } = useContext(UserContext);

  const [details, setDetails] = useState({ email: "", password: "" });
  const [user, setUser] = useState({ name: "", email: "", role: "" });

  // const data (to remove)
  const doctorUser = {
    email: "doc@domain.com",
    password: "admin123",
    name: "Marcin the Doctor",
    role: "Doctor"
  }

  // const data (to remove)
  const patientUser = {
    email: "patient@domain.com",
    password: "patient123",
    name: "Olga the Patient",
    role: "Patient"
  }

  const submitHandler = e => {
    e.preventDefault();

    if (details.email == doctorUser.email && details.password == doctorUser.password) {
      setUser({
        name: doctorUser.name,
        email: doctorUser.email,
        role: doctorUser.role
      });

      // request => token
      const token = 'doctor'
      tokenHandler(token)

      history.push('/doctor')
    }

    if (details.email == patientUser.email && details.password == patientUser.password) {
      setUser({
        name: patientUser.name,
        email: patientUser.email,
        role: patientUser.role
      });

      // zapros => token
      const token = 'patient'
      tokenHandler(token)

      history.push('/patient')
    }
  }

  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-left rounded">Med App</h1>
        <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form>
              <Form.Group className="text-left" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
              </Form.Group>

              <Form.Group className="text-left" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
              </Form.Group>

              <Row className="mt-4">
                <div>
                    <Link to={`/signup`}>
                      <Button className="btn-primary-spacing" variant="success btn-block" type="submit">
                        Sign Up
                      </Button>
                    </Link>
                  <Button className="btn-primary-spacing" variant="success btn-block" type="submit" onClick={submitHandler}>
                    Login
                  </Button>
                </div>
              </Row>
            </Form>
          </Col>          
        </Row>        
        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 Dominik Kurowski, Aliaksei Tokarau. All Rights Reserved.</h6>
      </Container>
    </>
  );
}

export default Login;

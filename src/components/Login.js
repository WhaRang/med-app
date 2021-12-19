import React, { useState, useContext } from 'react';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import DoctorMain from './DoctorMain';
import { UserContext } from '../App';
import PatientMain from './PatientMain';

function Login() {

  const history = useHistory();

  const { tokenHandler } = useContext(UserContext);

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
    <form onSubmit={submitHandler}>
      <h1>Login</h1>
      <div calssName="form-group">
        <label htmlFor="email">Login: </label>
        <input type="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
      </div>
      <div calssName="form-group">
        <label htmlFor="password">Password: </label>
        <input type="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
      </div>
      <Link to={`/signup`}>
        <input type="button" value="Sign Up" />
      </Link>
      <input type="submit" value="Sign In" />
    </form>
  );
}

export default Login;

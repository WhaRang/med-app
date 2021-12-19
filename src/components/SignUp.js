import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

function SignUp() {

  return (
    <div>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label htmlFor="name">Name: </label>
        <input type="text"/>
        <label htmlFor="phoneNumber">Phone number: </label>
        <input type="number"/>
      </div>
      <div className="form-group">
        <label htmlFor="name">Surname: </label>
        <input type="text"/>
        <label htmlFor="email">Email:</label>
        <input type="email"/>
      </div>
      <div className="form-group">
        <label htmlFor="pesel">PESEL: </label>
        <input type="number"/>
        <label htmlFor="password">Password: </label>
        <input type="password"/>
      </div>
      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of birth: </label>
        <input type="date"/>
        <label htmlFor="repeatPassword">Repeat password: </label>
        <input type="password"/>
      </div>
      <Link to='/login'>
        <input type="submit" value="Sign Up"/>
      </Link>
      <Link to='/login'>
        <input type="submit" value="Cancel"/>
      </Link>
    </div>
  );
}

export default SignUp;

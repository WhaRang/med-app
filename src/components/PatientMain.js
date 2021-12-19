import React, { useContext } from 'react';
import { UserContext } from '../App';
import '../App.css';
import { Link } from 'react-router-dom';

function PatientMain() {

    const { token } = useContext(UserContext);

    return (
        <div>
            <h1>{token}</h1>
        </div>
    );
}

export default PatientMain;
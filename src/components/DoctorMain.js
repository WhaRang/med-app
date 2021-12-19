import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

function DoctorMain() {

    const { token, tokenHandler } = useContext(UserContext);
    const [patientData, setPatientData] = useState({ name: "", pesel: "" });
    const [doctorData, setDoctorData] = useState({ name: "", role: "", patients: [] });

    const history = useHistory();

    useEffect(() => {
        // fetch
        setupFakeData();
    }, [token]);

    const logOut = () => {
        tokenHandler("");
        history.push('/login');
    }

    // const data (to remove)
    const setupFakeData = () => {
        setDoctorData({
            name: authorizedDoctorData.name,
            role: authorizedDoctorData.role,
            patients: authorizedDoctorData.patients
        });
    }

    // const data (to remove)
    const firstPatient = {
        id: "1",
        name: "Alex Flex",
        pesel: "123456789",
        messages: 2
    }

    // const data (to remove)
    const secondPatient = {
        id: "2",
        name: "Julia Pustkiewicz",
        pesel: "987654321",
        messages: 1
    }

    // const data (to remove)
    const authorizedDoctorData = {
        name: "Marcin Lewnicki",
        role: "Doctor",
        patients: [firstPatient, secondPatient]
    }

    return (
        <div>
            <h1>{doctorData.name}: {doctorData.role}</h1>
            <h1>Patients: {token}</h1>
            {doctorData.patients.map(patient => (
                <Link to={`/doctor/${patient.id}`}>
                    <h2>{patient.name}</h2>
                </Link>
            ))}
            <button onClick={logOut}>Log out</button>
        </div>
    );
}

export default DoctorMain;
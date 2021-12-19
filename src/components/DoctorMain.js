import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import '../App.css';
import { Link } from 'react-router-dom';

function DoctorMain() {

    const { token, tokenHandler } = useContext(UserContext);
    const [patientData, setPatientData] = useState({ name: "", paesel: "" });
    const [doctorData, setDoctorData] = useState({ name: "", role: "", patients: [] });

    const submitHandler = e => {
        e.preventDefault();
    }

    useEffect(() => {
        // fetch
        setupFakeData();
    }, [token]);

    const logOut = () => {
        tokenHandler("")
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
        <form onSubmit={submitHandler}>
            <h1>{doctorData.name}: {doctorData.role}</h1>
            <h1>Patients: {token}</h1>
            {doctorData.patients.map(patient => (
                <Link to={`/doctor/${patient.id}`}>
                    <h2>{patient.name}</h2>
                </Link>
            ))}
            <Link to={`/login`}>
                <input type="button" onClick="logOut()" value="Log out" />
            </Link>
        </form>
    );
}

export default DoctorMain;
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';

function DoctorMain() {

    const { token, tokenHandler } = useContext(UserContext);
    const [patientData, setPatientData] = useState({ name: "", pesel: "" });
    const [doctorData, setDoctorData] = useState({ name: "", role: "", patients: [] });
    const [filteredPatiens, setFilteredPatients] = useState([]);
    const [searchData, setSearchData] = useState("");

    const history = useHistory();

    useEffect(() => {
        // fetch
        setupFakeData();
    }, []);

    const logOut = () => {
        tokenHandler("");
        history.push('/login');
    }

    const search = () => {
        setFilteredPatients(doctorData.patients.filter(x => x.name.toUpperCase().includes(searchData.toUpperCase())));
    }

    // const data (to remove)
    const setupFakeData = () => {
        setDoctorData({
            name: authorizedDoctorData.name,
            role: authorizedDoctorData.role,
            patients: authorizedDoctorData.patients
        });
        setFilteredPatients(authorizedDoctorData.patients);
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
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Med App</h1>
                <Row className="mt-5">
                    <Col lg={4} md={10} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <h4 className="mt-5">{doctorData.name}</h4>
                        <h6 >{doctorData.role}</h6>
                        <Button className="mt-5" variant="success btn-block" onClick={logOut}>Log out</Button>
                    </Col>

                    <Col lg={7} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <h3>Patient list</h3>
                        <Row className="mt-5">
                            <div>
                                <input type="text" onChange={(e) => setSearchData(e.target.value)} />
                                <Button className="btn-primary-spacing" variant="success btn-block" onClick={search}>Search</Button>
                            </div>
                        </Row>
                        {filteredPatiens.map(patient => (
                            <Link to={`/doctor/${patient.id}`} key={patient.id}>
                                <Col lg={5} className="p-1 m-auto shadow-sm rounded-lg">
                                    <h4>{patient.name}</h4>
                                </Col>
                            </Link>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DoctorMain;
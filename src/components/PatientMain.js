import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';

function PatientMain() {

    const { token, tokenHandler } = useContext(UserContext);
    const [patientData, setPatientData] = useState({ name: "", patientMessages: [] });
    const [messageData, setMessageData] = useState({ from: "", when: "" });
    const [filteredMessages, setFilteredMessages] = useState([]);
    const [searchData, setSearchData] = useState("");

    const history = useHistory();

    const logOut = () => {
        tokenHandler("");
        history.push('/login');
    }

    const search = () => {
        setFilteredMessages(patientData.patientMessages.filter(x => x.from.toUpperCase().includes(searchData.toUpperCase())));
    }

    useEffect(() => {
        // fetch
        setupFakeData();
    }, []);

    // const data (to remove)
    const setupFakeData = () => {
        setPatientData({
            name: authorizedPatientData.name,
            patientMessages: authorizedPatientData.messages
        });
        setFilteredMessages(authorizedPatientData.messages);
    }

    // const data (to remove)
    const authorizedPatientData = {
        name: "Alex Flex",
        messages: [{
            id: "1",
            from: "Marcin Lewnicki",
            when: "01.01.01"
        }, {
            id: "2",
            from: "Andrzej Morawecki",
            when: "02.02.02"
        }]
    }

    return (<>
        <Container>
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Med App</h1>
            <Row className="mt-5">
                <Col lg={4} md={10} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <h4 className="mt-5">{patientData.name}</h4>
                    <h6>patient</h6>
                    <Button className="mt-5" variant="success btn-block" onClick={logOut}>Log out</Button>
                </Col>
                <Col lg={7} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <h3>Analysis results: </h3>
                    <div>
                        <input type="text" onChange={(e) => setSearchData(e.target.value)} />
                        <Button className="btn-primary-spacing" variant="success btn-block" onClick={search}>Search</Button>
                    </div>
                    {filteredMessages.map(message => (
                        <Link to={`/patient/${message.id}`} key={message.id}>
                            <Col lg={5} className="p-1 m-auto shadow-sm rounded-lg">
                                <h4>{message.from}</h4>
                            </Col>
                        </Link>
                    ))}
                </Col>
            </Row>
        </Container>
    </>
    );
}

export default PatientMain;
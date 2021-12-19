import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

function PatientMain() {

    const { token, tokenHandler } = useContext(UserContext);
    const [patientData, setPatientData] = useState({ name: "", massages: [] });
    const [messageData, setMessageData] = useState({ from: "", when: "" });

    const history = useHistory();

    const logOut = () => {
        tokenHandler("");
        history.push('/login');
    }

    useEffect(() => {
        // fetch
        setupFakeData();
    }, [token]);
    
    // const data (to remove)
    const setupFakeData = () => {
        setPatientData({
            name: authorizedPatientData.name,
            massages: authorizedPatientData.messages
        });
    }

    // const data (to remove)
    const firstMessage = {
        id: "1",
        from: "Marcin Lewnicki",
        when: "01.01.01"
    }

    // const data (to remove)
    const secondMessage = {
        id: "2",
        from: "Andrzej Morawecki",
        when: "02.02.02"
    }
    
    // const data (to remove)
    const authorizedPatientData = {
        name: "Alex Flex",
        messages: [firstMessage, secondMessage]
    }

    return (
        <div>
            <h1>Analysis results: </h1>
            <Link to={`/login`}>
                <button onClick={logOut}>Log out</button>
            </Link>
        </div>
    );
}

export default PatientMain;
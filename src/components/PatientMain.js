import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

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

    return (
        <div>
            <h1>{patientData.name}: patient</h1>
            <h1>Analysis results: </h1>
            <div>
                <input type="text" onChange={(e) => setSearchData(e.target.value)} />
                <button onClick={search}>Search</button>
            </div>
            {filteredMessages.map(message => (
                <Link to={`/patient/${message.id}`} key={message.id}> 
                    <h2>{message.from}</h2>
                </Link>
            ))}
            <Link to={`/login`}>
                <button onClick={logOut}>Log out</button>
            </Link>
        </div>
    );
}

export default PatientMain;
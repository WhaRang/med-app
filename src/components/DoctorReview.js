import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

function DoctorReview({ match }) {

    const history = useHistory();

    const { tokenHandler, token } = useContext(UserContext);

    const [doctorReview, setDoctorReview] = useState("");
    const [patienReviewData, setPatienReviewData] = useState({ id: "", name: "", pesel: "", gender: "", age: "", phoneNumber: "" });

    useEffect(() => {
        // fetch
        setupFakeData();
    }, []);

    const submitHandler = e => {
        e.preventDefault();

        // send data from textarea to db (doctorReview)

        history.push('/doctor')
    }

    const logOut = () => {
        tokenHandler("")
    }

    // const data (to remove)
    const samplePatient = {
        id: "1",
        name: "Alex Flex",
        pesel: "123456789",
        gender: "M",
        age: 21,
        phoneNumber: "987654321"
    }

    // const data (to remove)
    const setupFakeData = () => {
        setPatienReviewData({
            id: samplePatient.id,
            name: samplePatient.name,
            pesel: samplePatient.pesel,
            gender: samplePatient.gender,
            age: samplePatient.age,
            phoneNumber: samplePatient.phoneNumber
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <h3>Name: {patienReviewData.name}</h3>
            <h3>PESEL: {patienReviewData.pesel}</h3>
            <h3>Gender: {patienReviewData.gender}</h3>
            <h3>Age: {patienReviewData.age}</h3>
            <h3>PhoneNumber: {patienReviewData.phoneNumber}</h3>
            <div>
                <img src="../assets/pneumonia.jpg" />
            </div>
            <div>
                <input type="button" onClick="analyze()" value="Analyze with AI" />
                <> Obivous signs of pneumonia</>
            </div>
            <div>
                <textarea rows="4" cols="50">
                </textarea>
            </div>
            <div>
                <input type="submit" value="Apply" />
                <Link to={`/doctor`}>
                    <input type="button" value="Close" />
                </Link>
            </div>
            <div>
                <Link to={`/login`}>
                    <input type="button" onClick="logOut()" value="Log out" />
                </Link>
            </div>
        </form>
    );
}

export default DoctorReview;
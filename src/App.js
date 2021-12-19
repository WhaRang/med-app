import React, {useState} from 'react';
import './App.css';
import Login from './components/Login'
import MedApp from './components/MedApp'
import SignUp from './components/SignUp';
import DoctorMain from './components/DoctorMain'
import PatientMain from './components/PatientMain';
import DoctorReview from './components/DoctorReview';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const UserContext = React.createContext()

function App() {

  const [token, setToken] = useState("");

  const tokenHandler = (newToken) => {
    setToken(newToken);
  }

  return (
    <UserContext.Provider value={{token, tokenHandler}}>
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={MedApp} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/doctor" exact component={DoctorMain} />
            <Route path="/doctor/:id" component={DoctorReview} />
            <Route path="/patient" exact component={PatientMain} />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

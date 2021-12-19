import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

function MedApp() {
  return (
    <div>
      <h1>MedApp</h1>
      <ul>
          <Link to='/login'>
              <button>Sign In</button>
          </Link>
      </ul>
    </div>
  );
}

export default MedApp;

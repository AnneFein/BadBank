import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navbar';
import { UserContext } from './context';
import Home from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';

function Spa() {
  return (
    <Router>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            { name: 'anne', email: 'anne@mit.edu', password: 'secret', balance: 100 }
          ]
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          <Route path="/alldata/" element={<AllData />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

createRoot(document.getElementById('root')).render( // Use createRoot instead of ReactDOM.render
  <React.StrictMode>
    <Spa />
  </React.StrictMode>
);

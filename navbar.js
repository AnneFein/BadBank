import React from 'react';
import { Link } from 'react-router-dom'; 

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
          <Link className="navbar-brand" to="/">BadBank</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className='navbar-nav'>
                  <li className='nav-item'>
                      <Link className="nav-link" to="/create-account">Create Account</Link>
                  </li>
                  <li className='nav-item'>
                      <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className='nav-item'>
                      <Link className="nav-link" to="/deposit">Deposit</Link>
                  </li>
                  <li className='nav-item'>
                      <Link className="nav-link" to="/withdraw">Withdraw</Link>
                  </li>
                  <li className='nav-item'>
                      <Link className="nav-link" to="/all-data">All Data</Link>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  );
}

export default NavBar;









/*     <div>
      <Link to="/">Home</Link>
      <Link to="/createaccount">Create Account</Link>
      <Link to="/login">Login</Link>
      <Link to="/deposit">Deposit</Link>
      <Link to="/withdraw">Withdraw</Link>
      <Link to="/balance">Balance</Link>
      <Link to="/alldata">All Data</Link>
    </div>   */



// function NavBar(){
// return (
//     <div>
//     <a href="#">BankBank</a>
//     <a href="#/createaccount/">#CreateAccount</a>
//     <a href="#/login/">Login</a>
//     <a href="#/deposit/">Deposit</a>
//     <a href="#/withdraw/">Withdraw</a>
//     <a href="#/balance/">Balance</a>
//     <a href="#/alldata/">AllData</a>
//     </div>
// );

// }

// export default NavBar;
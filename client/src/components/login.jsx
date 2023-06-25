import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function LoginForm () {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleClick(event) {
    event.preventDefault();

    const authtoken = {user: username,passw: password};
    axios.post('http://localhost:8000/signin', authtoken)
  }



  return (
    <div className="container flex align-items-center justify-content-center">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    name='user'
                    value={username}
                    id="username"
                    placeholder="Enter Username"
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    name='pass'
                    placeholder="Enter your password"
                    onChange={handlePasswordChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

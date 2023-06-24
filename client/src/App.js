import React, { useState } from 'react';
import LoginPage from './pages/loginPage.js';
import AdminPage from './pages/adminPage';
import StaffPage from './pages/staffPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  const handleLogin = (username, password, selectedRole) => {
    // Perform authentication logic here (e.g., API calls, etc.)
    // Set loggedIn and role based on the authentication result

    // Simulating a successful login for demonstration purposes
    setLoggedIn(true);
    setRole(selectedRole);
  };

  return (
    <div>
      {!loggedIn ? (
        <LoginPage handleLogin={handleLogin} />
      ) : role === 'admin' ? (
        <AdminPage />
      ) : (
        <StaffPage />
      )}
    </div>
  );
}

export default App;

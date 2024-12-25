import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contact/UserContext';
import CreateUser from './contact/CreateUser';
import User from './contact/User';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

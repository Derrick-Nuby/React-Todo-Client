import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import CreateAccount from './pages/CreateAccount';
import Index from './pages/Index';
import Login from './pages/Login';
import Todos from './pages/Todos';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
};

export default App;

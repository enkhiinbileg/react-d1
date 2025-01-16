import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/layout';
import Loginnn from './logg/loginnn';
import Signupp from './logg/signupp';
import Event from './createEvent/Event';


function App() {
  return (
    <div className="w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/loginnn" element={<Loginnn />} />
          <Route path="/Signupp" element={<Signupp />} />
          <Route path="/Event" element={<Event />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
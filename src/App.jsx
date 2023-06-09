import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './pages/Authentication/SPA/authConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/Authentication/SPA/styles/index.css';

import 'bootstrap/dist/css/bootstrap.css';
import Authentication from './pages/Authentication/SPA/Authentication';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormLayoutNominee from './pages/FormLayoutNominee';
import SideBar from './components/Sidebar';
import Login from './pages/Admin/Login';
import Filter from './pages/Admin/Filter';
import Landing from './pages/Landing';

export const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/auth"
          element={<Authentication msalInstance={msalInstance} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/filter" element={<Filter />} />

        <Route
          path="/nominee"
          element={
            <>
              <FormLayoutNominee />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;

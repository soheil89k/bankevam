import React from 'react';

import '../node_modules/antd/dist/antd.min.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Avatar } from 'antd';

import './App.scss';
import Dashboard from "./Dashboard/Dashboard";
function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
function App() {
  return (
    <div className="App">
        <Router>
            <Dashboard/>
        </Router>
    </div>
  );
}

export default App;

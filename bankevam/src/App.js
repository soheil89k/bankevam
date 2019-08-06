import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Avatar } from 'antd';
import './App.scss';
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
        <div>
            <div>
                <Avatar size={64} icon="user" />
                <Avatar size="large" icon="user" />
                <Avatar icon="user" />
                <Avatar size="small" icon="user" />
            </div>
            <div>
                <Avatar shape="square" size={64} icon="user" />
                <Avatar shape="square" size="large" icon="user" />
                <Avatar shape="square" icon="user" />
                <Avatar shape="square" size="small" icon="user" />
            </div>
        </div>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
            </div>
        </Router>
    </div>
  );
}

export default App;

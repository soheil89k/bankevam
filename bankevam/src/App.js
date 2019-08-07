import React from 'react';

import '../node_modules/antd/dist/antd.min.css';



import './App.scss';
import './Standard.scss';
import RouteController from "./RouteController";

function App() {
  return (
    <div className="App">
        <RouteController/>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import {Route} from "react-router-dom";
import './App.css';
import ClientDashboard from "./Components/ClientDoashboard/ClientDashboard";

class App extends Component {
  render() {
    return (
      <div className='app'>
          <Route path="/" exact render={() => <ClientDashboard/>}/>
      </div>
    );
  }
}

export default App;
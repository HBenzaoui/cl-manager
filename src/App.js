import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';

import './App.css';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/client/add" component={AddClient} />
                <Route path="/client/:id" component={ClientDetails} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

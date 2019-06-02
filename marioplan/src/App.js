import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route to="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

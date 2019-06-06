import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Signin from './components/auth/Signin';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route to="project/:id" component={ProjectDetails} />
          <Route exact to="/" component={Dashboard} />
          <Route exact to="/signin" component={Signin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

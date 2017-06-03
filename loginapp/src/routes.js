// src/routes.js
import React from 'react';
import { Router, Route} from 'react-router'
import Login from './Pages/Login';
import Wellcome from './Pages/Wellcome';


const Routes = (props) => (
  <Router {...props}>
     <Route path="/" component={Login} />
    <Route path="/wellcome" component={Wellcome} />
  </Router>
);

export default Routes;
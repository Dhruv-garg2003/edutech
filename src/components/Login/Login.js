import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* Add other routes for your app here */}
        </Switch>
      </div>
    </Router>
  );
};

export default Login;
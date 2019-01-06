import React from 'react';
import { hot } from 'react-hot-loader'
import Hello from './component/Hello';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const AppRouter = () => (
  <Router>
    <Route path="/" exact component={Hello} />
  </Router>
);

export default hot(module)(AppRouter);

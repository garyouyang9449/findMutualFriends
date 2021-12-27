import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

const test = () => {
  return (
    <div>here</div>
  )
}
const App = () => {
  return (
    <Router>
      <Route path="/" component={test} />
    </Router>
  );
}

export default App;

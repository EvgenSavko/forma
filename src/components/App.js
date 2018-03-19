import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormList from './FormList';
import AnswerList from './AnswerList';

class App extends Component {
  render() {
    return (
      <div >
        <Route exact path="/" component={FormList} />
        <Route path="/quest" component={FormList} />
        <Route path="/ans" component={AnswerList} />
      </div>
    );
  }
}

export default App;


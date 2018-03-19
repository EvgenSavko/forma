import React, { Component } from 'react';
import OwnStyle from './OwnStyle.css';
import Forma2 from './Forma2';
import Navbar from './Navbar';

class FormList extends Component {
  render() {
    return (
      <div className='container borderMy width '>
        <Navbar />
        <hr/>
        <Forma2 />
      </div>
    );
  }
}

export default FormList;
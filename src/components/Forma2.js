import React, { Component } from 'react';
import FormaSyle from './FormaSyle.css';

class Forma2 extends Component {
  constructor(){
    super()
  }
    
  render() {
    return (
 <div className='container  ' >
 <div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text">0 відповідей</span>
  </div>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>
        </div>
    )
  }
}

export default Forma2;

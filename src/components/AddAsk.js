import React, { Component } from 'react';
import OwnStyle from './OwnStyle.css';

class AddAsk extends Component {
  constructor(props){
    super(props)
      
    this.onButton = this.onButton.bind(this)
     this.state = {
        a : 1
     }
  }

   onButton(e) {
      e.preventDefault();
     let coun = this.state.a + 1;
     this.props.onAddAsk( coun );
       this.setState({a : coun })
    } 
    
  render() {
     
    return (
    <div>
  <button onClick={this.onButton} className="btn btn-secondary btn-sm" type="button"  >
    add
  </button>
        </div>
    )
  }
}

export default AddAsk;

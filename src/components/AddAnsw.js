import React, { Component } from 'react';
import OwnStyle from './OwnStyle.css';

class AddAnsw extends Component {
  constructor(props){
    super()
     
      this.onButton = this.onButton.bind(this)
     this.state = {
         a : 1
     }
  }
    
     onButton(e) {
      e.preventDefault();
         let coun = this.state.a + 1;
     this.props.onAddAnsw( coun );
       this.setState({a : coun })
    } 
    
  render() {
    return (
    <div>
  <button onClick={this.onButton} className="btn btn-secondary btn-sm" type="button"  >
    Додати відповідь
  </button>
        </div>
    );
  }
}

export default AddAnsw;

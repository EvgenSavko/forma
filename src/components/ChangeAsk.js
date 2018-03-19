import React, { Component } from 'react';
import OwnStyle from './OwnStyle.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ChangeAsk extends Component {
  constructor(props){
    super(props)
      
    this.onButtonString = this.onButtonString.bind(this)
    this.onButtonCheck = this.onButtonCheck.bind(this)
    this.onButtonUl = this.onButtonUl.bind(this)
 
      
      this.state = {
          string : 'off',
          check : 'off',
          ul : 'off'
      }
      
  }
    //дописать ЛиНК
    
    onButtonString(e) {
      e.preventDefault();
        this.state.string = 'on'
        this.state.check = 'off'
        this.state.ul = 'off'
     this.props.onButtonC({isOpen1: true, isOpen2: false, isOpen3: false});
     
    }
    onButtonCheck(e) {
      e.preventDefault();
        this.state.string = 'off'
        this.state.check = 'on'
        this.state.ul = 'off'
     this.props.onButtonC({isOpen1: false, isOpen2: true, isOpen3: false});
      
    }
    onButtonUl(e) {
      e.preventDefault();
        this.state.string = 'off'
        this.state.check = 'off'
        this.state.ul = 'on'
     this.props.onButtonC({isOpen1: false, isOpen2: false, isOpen3: true});
        
    }
    
  
    
  render() {
      
    return (
        <div>
        <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Вибір типу відповіді
  </button>
         
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button onClick={this.onButtonString} className="dropdown-item" type="button">З короткими відповідями</button>
    <button onClick={this.onButtonCheck} className="dropdown-item" type="button">З варіантами відповідей</button>
    <button onClick={this.onButtonUl} className="dropdown-item" type="button">Випадаючий список</button>
  </div>
</div>
      </div>
    );
  }
}

export default ChangeAsk;

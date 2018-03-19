import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OwnStyle from './OwnStyle.css';
import QuestString from './QuestString';
import QuestCheck from './QuestCheck';
import QuestUl from './QuestUl';
import ChangeAsk from './ChangeAsk';
import AddAnsw from './AddAnsw';
import AddAsk from './AddAsk';



class QuestList extends Component {
  constructor(props){
    super(props)
      this.onButtonChange = this.onButtonChange.bind(this)
      this.onButtonAddAnsw = this.onButtonAddAnsw.bind(this)
      this.onButtonAddAsk = this.onButtonAddAsk.bind(this)
      
      
      this.state = {
            object : {
                isOpen1: true,
                isOpen2: false,
                isOpen3: false,
            },
         arrAnsw : '',

        }   
      
      
  }
    // обернуть  <QuestString /> в роут <QuestCheck />
  onButtonChange(object) {
    this.setState({object : object})
 }
   onButtonAddAnsw(answ) {
    this.setState({arrAnsw : answ})
 }  
   onButtonAddAsk(ask) {
    this.setState({arrAsk: ask})
 }     
    

    
    
  render() {
   console.log('arrAnsw', this.state.arrAnsw)
    return (
      <div className='container ' >
        
       <div className='row '> 
        
        <div className='col-8 '> 
        { this.state.object.isOpen1 &&  <QuestString />}
        { this.state.object.isOpen2 &&  <QuestCheck num={this.state.arrAnsw} />}
        { this.state.object.isOpen3 &&  <QuestUl num={this.state.arrAnsw}/>}
        </div>
        
        <div className='col-4 '> 
              <div className='col-12 '>
               <ChangeAsk onButtonC={this.onButtonChange} />
              </div>
        <hr />
             <div className='col-12 '> 
 
                    <AddAnsw  onAddAnsw={this.onButtonAddAnsw}/>
                { this.state.arrAnsw = '' }

            </div>
        </div>
        
         </div>
        
      </div>
    );
  }
}

export default QuestList;

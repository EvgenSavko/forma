import React, { Component } from 'react';
import OwnStyle from './OwnStyle.css';
import Forma from './Forma';
import Navbar from './Navbar';
import QuestList from './QuestList';
import AddAsk from './AddAsk';

class FormList extends Component {
   constructor(props){
       super(props)
       
       this.onButtonAddAsk = this.onButtonAddAsk.bind(this)
       this.onButton = this.onButton.bind(this)
       
       this.state = {
           arr : [1],
           number : ''
       }
   }

    onButtonAddAsk(number) {
       this.setState({number : number})
    }
    
    onButton(e) {
      
        e.target.parentElement.parentElement.parentElement.className = 'none'
    } 
    
  render() {
       
      if(this.state.number >= 2){
          this.state.arr.push(this.state.number)
      }
    return (
      <div className='container borderMy1 width '>
        <Navbar />
        <Forma />
        <hr/>
        { this.state.arr.map((item, index) => {  // перебираeм массив
                let i
				i = index  // из массива postsData делаем чистый обьект
				return (
					<div className='row borderMy'>
                       <div className="col-11 ">
                        <QuestList props={i} onButtAsk={this.onButtonAddAsk}/>
                       </div>
                       <div className="col-1">
                        <AddAsk  onAddAsk={this.onButtonAddAsk}/>
                        <div>
                           <button onClick={this.onButton} className="btn btn-dark btn-sm" type="button">del.</button>
                        </div>
                       </div>
                    </div> 
				)
            })
   		   }
      </div>
    );
  }
}

export default FormList;
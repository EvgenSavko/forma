import React, { Component } from 'react';
import OwnStyle from './OwnStyle.css';

class QuestCheck extends Component {
  constructor(props){
    super(props)
      
      this.onButton = this.onButton.bind(this)
      this.state = {
          arr : [1],
      }

  }
   
    
    onButton(e) {
       console.log('button arr', e.target.id)
        e.target.parentElement.className = 'none'
    } 
    
  render() {
      if ( this.props.num ) this.state.arr.push(this.props.num)
   console.log('this.state.arr', this.state.arr)
    return (
    <div>
        <form className='forma'>
       <div className="form-group">                                                                                      
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Запитання"  />
           </div>
        { this.state.arr.map((item, index) => {  // перебираeм массив
                let i
				i = index  // из массива postsData делаем чистый обьект
				return (
                 <div className="input-group">
                    <div className="input-group-prepend">
                     <div className="input-group-text">
                       <input type="radio" aria-label="Radio button for following text input" />
                     </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="Варіант       відповіді" />
                    <button onClick={this.onButton} id={index} className="btn btn-secondary btn-sm" type="button"  >X</button>
                  </div>
				)
            })
   		   }        

        
         </form>
        </div>


    );
  }
}

export default QuestCheck;

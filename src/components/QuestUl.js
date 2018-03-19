import React, { Component } from 'react';
import OwnStyle from './OwnStyle.css';

class QuestUl extends Component {
  constructor(props){
    super()
      
     this.onButton = this.onButton.bind(this)
      
      this.state = {
          arr : [1]
      }
  }
    
     onButton(e) {
       console.log('button arr', e.target.id)
        e.target.parentElement.parentElement.parentElement.className = 'none'
    } 
    
  render() {
      console.log(this.props.num)
      if (this.props.num) {
          this.state.arr.push(this.props.num)
      }
      console.log('QuestUl this.stat.arr', this.state.arr)
    return (
    <div>
        <form className='forma '>
       <div className="form-group">                                                                                      
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Запитання"  />
           </div>
        
          <ol className="list-group ">
                { this.state.arr.map((item, index) => {  // перебираeм массив
                let i
				i = index  // из массива postsData делаем чистый обьект
				return (     
					<div className='container'> 
                       <li >
                          <div className="row"> 
                            <div className="col-10" >
                             <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Варіант відповіді"  />
                            </div>
                            <div className="col-1 " >
                             <button onClick={this.onButton} id={index} className="btn btn-secondary btn-md" type="button">X</button>
                            </div>
                          </div>
                       </li>
                    </div>  
				)
            })
   		   }
         </ol>    
         </form>
        </div>


    );
  }
}

export default QuestUl;

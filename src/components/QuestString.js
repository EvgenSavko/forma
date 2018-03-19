import React, { Component } from 'react';
import OwnStyle from './OwnStyle.css';

class QuestString extends Component {
  constructor({props}){
    super(props)

  }
  render() {
    return (
    <div>
        <form className='forma '>
       <div className="form-group">                                                                                      
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Запитання"  />
           </div>
            <div className="form-group">
               <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Текст запитання з короткими відповідями"/>
           </div>
         </form>
        </div>


    );
  }
}

export default QuestString;

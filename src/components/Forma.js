import React, { Component } from 'react';
import FormaSyle from './FormaSyle.css';

class Forma extends Component {
  constructor(props){
    super()
     this.samVarieble = " i am variebled String"



  }
  render() {
    return (
      <div className='container  ' >
        <form className='forma '>
       <div className="form-group">                                            
          <label for="formGroupExampleInput">Вкажіть назву і опис форми</label>                                            
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Форма без назви"  />
           </div>
            <div className="form-group">
               <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Опис форми"/>
           </div>
         </form>
      </div>
    );
  }
}

export default Forma;

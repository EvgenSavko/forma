import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Navbar(props){
console.log(props)



	return (
    	<div className='container '>
	        <nav className="uk-navbar-container uk-margin" uk-navbar>
              <div className="uk-navbar-left">

           <Link className="uk-navbar-item uk-logo" to="/"></Link>

        <ul className="nav nav-tabs">
           <li className="nav-item">
             <Link className="nav-link active" to="/quest">ЗАПИТАННЯ</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link " to={`/ans`}>ВІДПОВІДІ</Link>
           </li>
       </ul>

         </div>
       </nav>
     </div>
  
		)

}

export default Navbar;
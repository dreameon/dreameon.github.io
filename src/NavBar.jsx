// Navigation bar to tranverse the different projects 
import React from 'react'
import './css/navbar.css';
import { Link } from "react-router-dom";

function NavBar(props) {
   return (
    <div className='nav-bar'> 
       <div className='home-nav nelphim-font'>
            <Link className='link' to='/'> evelyn </Link>
        </div>
    </div>
   );
}

export default NavBar
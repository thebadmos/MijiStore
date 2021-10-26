import React, {useState} from 'react'
import {Link} from 'react-scroll'


function Navbar() {
    const [nav,setnav] = useState(false);

    const changeBackground =() =>{
        if(window.scrollY >=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
            <nav className={ nav ? 'nav active' : 'nav'}>
           <Link to ="#" className="logo">
               <h4>MijiStore</h4>
                     </Link>
           <input type= "checkbox" className="menu-btn" id="menu-btn"/>
           <label className="menu-icon" htmlFor="menu-btn">
               <span className="nav-icon"></span>
           </label>
           <ul className="menu">
               <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
               <li><Link to="feat" spy={true} smooth={true}>Features</Link></li>
               <li><Link to="store" spy={true} smooth={true}>Store</Link></li>
           </ul>
        </nav> 
      
    )
}

export default Navbar

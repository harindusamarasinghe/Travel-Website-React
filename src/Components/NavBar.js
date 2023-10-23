import React ,{useState} from 'react';
import './NavBarStyles.css';
import Home from '../Icons/home-smile-svgrepo-com.svg';
import Tour from '../Icons/travel-expenses-svgrepo-com.svg';
import Gallery from '../Icons/gallery-svgrepo-com.svg';
import About from '../Icons/about-svgrepo-com (1).svg';
import Contact from '../Icons/contact-svgrepo-com.svg';


export default function NavBar(){
    const[menuOpen,setMenuOpen]=useState(false);
    return(
        <div>
            <nav className='navbar--items' >
                <h1>CocoShores</h1>
                <div className='menu' onClick={()=>{
                        setMenuOpen(!menuOpen);
                    }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen?"open":""}>
                    <li className='items'>
                        <img src={Home} alt='Home Icon'/>
                        <a href='/' className='links'>Home</a>
                    </li>
                    <li className='items'>
                        <img src={Tour} alt='Travel Icon'/>
                        <a href='/' className='links'>Tour Packages</a>
                    </li>
                    <li className='items'>
                        <img src={Gallery} alt='Gallery Icon'/>
                        <a href='/' className='links' >Gallery</a>
                    </li>
                    <li className='items'>
                        <img src={About} alt='About Icon'/>
                        <a href='/' className='links' >About</a>
                    </li>
                    <li className='items'>
                        <img src={Contact} alt='Home Icon'/>
                        <a href='/' className='links' >Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
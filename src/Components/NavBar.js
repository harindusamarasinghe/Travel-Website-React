import React from 'react';
import Home from '../Icons/home-smile-svgrepo-com.svg';
import Tour from '../Icons/travel-expenses-svgrepo-com.svg';
import Gallery from '../Icons/gallery-svgrepo-com.svg';
import About from '../Icons/about-svgrepo-com (1).svg';
import Contact from '../Icons/contact-svgrepo-com.svg';

export default function NavBar(){
    return(
        <div>
            <nav>
                <h1>CocoShores</h1>
                <ul>
                    <li>
                        <img src={Home} alt='Home Icon'/>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <img src={Tour} alt='Travel Icon'/>
                        <a href='/'>Tour Packages</a>
                    </li>
                    <li>
                        <img src={Gallery} alt='Gallery Icon'/>
                        <a href='/'>Gallery</a>
                    </li>
                    <li>
                        <img src={About} alt='About Icon'/>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <img src={Contact} alt='Home Icon'/>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
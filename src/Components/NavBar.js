import React ,{Component} from 'react';
import './NavBarStyles.css';



export default class NavBar extends Component{
    state= {clicked:false};
    handlelick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return(
        <div>
            <nav className='navbar--items' >
                <h1>CocoShores</h1>
                <ul id='navbar' className={this.state.clicked?"#navbar active":"#navbar"}>
                    <li className='items'>
                        
                        <a href='/' className='links'>Home</a>
                    </li>
                    <li className='items'>
                         
                        <a href='/' className='links'>Tour Packages</a>
                    </li>
                    <li className='items'>
                        
                        <a href='/' className='links' >Gallery</a>
                    </li>
                    <li className='items'>
                        
                        <a href='/' className='links' >About</a>
                    </li>
                    <li className='items'>
                        
                        <a href='/' className='links' >Contact</a>
                    </li>
                </ul>
                <div id='mobile' onClick={this.handlelick}>
                    <i
                    id="bar"
                    className={this.state.clicked? "fa fa-close":"fas fa-bars"}>    
                    </i>
                </div>
            </nav>
        </div>
    )
}}
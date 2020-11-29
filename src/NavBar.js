import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import firebase from './firebase_config'
require('firebase/auth');
require('firebase/database');

function SignOutUser(){
    firebase.auth().signOut();
}

function SignInNavBar(){
    
    var user = firebase.auth().currentUser;
        if (user){
            return(
                <Link to = '/'>
                    <li>
                        <p onClick = {SignOutUser}> Sign out </p> 
                    </li>
                </Link>
            )
        }
        else{
            return(
                <Link to = '/signin'>
                    <li>
                        <p > Sign In </p> 
                    </li>
                </Link>
            )
        }
    }



function NavBar(){

    const[openMenu, setOpen] = useState(false);

    return(
        <div className = 'logo'>
            <nav>
                <div> <h1> VIVIDBOOKING </h1> </div>
                    <ul className = 'nav-links' style ={{ transform: openMenu ? 'translateX(0px)' : ''}}> 
                        <Link to = '/'>
                            <li>
                                <p> Home </p> 
                            </li>
                        </Link>
                        <Link to = '/rooms'>
                            <li>
                                <p> Rooms </p>  
                            </li>
                        </Link>
                        <Link to = '/contact'>
                            <li>
                                <p> Contact Us </p> 
                            </li>
                        </Link>
                        <SignInNavBar />
                    </ul>
                    <i onClick = {() => setOpen(!openMenu)} className ='fas fa-bars menu'> </i>
            </nav>
        </div>
    )
}

export default NavBar
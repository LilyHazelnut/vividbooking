import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from './firebase_config'
require('firebase/auth');
require('firebase/database');

export default function SignUp() {
    var database = firebase.database();
    

    const [userName, setuserName] = useState('');
    const [passWord, setpassWord] = useState('');
    const [readUser, setreadUser] = useState(database.ref('User'));
    const [userData, setuserData] = useState(null);
    const [isLogin, setisLogin] = useState(false)
    const history = useHistory();

    const getUser = (enterUser) => {
        setuserName(enterUser);
    }

    const getPass = (enterPass) => {
        setpassWord(enterPass);
    }

    useEffect(() => {
        readUser.once('value', (snapshot)=> {
            setuserData(snapshot.val())
        })
    })

    const ChangeLogIn = () => {
        setisLogin(true)
    }
    
    const clickSignUp = async() => {
        try{
            await firebase.auth().createUserWithEmailAndPassword(userName, passWord)
            history.push('/signin')
            ChangeLogIn()
        } 
        catch(error){
            alert(error)
        }
    }

    return(
        <div className = 'maing-login'> 
            <div className = 'login-box'>
                <h1 className = 'signin-h1'> VIVIDBOOKING </h1>
                <form className ='login-form'>
                    <label className = 'spacelabel'>
                        Email
                        <input type = 'text' name = 'userName' 
                        className = 'spaceinput' value = {userName} 
                        onChange = {e => getUser(e.target.value) } />
                    </label>
                    <label className = 'spacelabel'>
                        Password
                        <input type = 'password' name = 'pass' 
                        className = 'spaceinput' value = {passWord} 
                        onChange = {e => getPass(e.target.value) } />
                    </label>
                </form>
                <div className = 'login-button' onClick = {clickSignUp}>
                    <h3> Sign Up </h3>
                </div>
            </div>
        </div>
    )
}

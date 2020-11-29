import './Signin.css'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from './firebase_config'
require('firebase/auth');
require('firebase/database');

function SignIn (){

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
    
    const ToSignUp = () => {
       history.push('/SignUp')
    }

    const clickLogIn = async() => {
        try {
            await firebase.auth().signInWithEmailAndPassword(userName, passWord)
            ChangeLogIn()
            history.push('/')
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
                    <div className = 'signup-part'>
                        <p className = 'goto-SignUp'>Don't have an acoount ?</p>
                        <p className = 'goto-SignUp' onClick = {ToSignUp}> Sign Up</p>
                    </div>
                </form>
                <div className = 'login-button' onClick = {clickLogIn }>
                    <h3> LogIn </h3>
                </div>
                
            </div>
        </div>
    )
}

export default SignIn


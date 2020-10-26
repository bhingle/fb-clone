import React from 'react'
import './Login.css';
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () =>{
        auth.
        signInWithPopup(provider)
        .then((result) =>{

            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
            console.log(result.user);
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" className="login__facebook"/>
            </div>
            <button type="submit" onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login 

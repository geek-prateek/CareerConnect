import React, { useState } from 'react'
import './Login.css';
import logo from "../Images/logo.png";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../Firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error));
    };
    const register = () => {
        if(!name) {
            return alert("Please enter your full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }));
            });
        }).catch(error => alert(error));
    };

  return (
    <div className='login'>
        
        <img src={logo} alt="logo" />
        <h1>Log in to CareerConnect</h1>
        <form>
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full name'/>
            <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder='Profile URL'/>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email'/>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password'/>
            <button type='submit' onClick={loginApp}>Sign In</button>
        </form>
        <p>Not a member ? <span className='login_register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login
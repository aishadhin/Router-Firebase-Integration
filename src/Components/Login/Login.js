import React from 'react';
import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from "../../firebase.init";
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(() => {
            navigate(from, { replace: true });
        })
    }
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={handleGoogleSignIn} style={{ marginBottom: '20px' }}>Google Signin</button>
            <form>
                <input type='email' placeholder='Email' /><br />
                <input type='password' placeholder='Password' /><br />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
};

export default Login;
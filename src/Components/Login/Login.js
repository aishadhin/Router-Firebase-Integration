import React from 'react';
import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from "../../firebase.init";

const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={()=>signInWithGoogle()} style={{ marginBottom: '20px' }}>Google Signin</button>
            <form>
                <input type='email' placeholder='Email' /><br />
                <input type='password' placeholder='Password' /><br />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
};

export default Login;
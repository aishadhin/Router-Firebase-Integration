import React from 'react';
import useFirebase from '../../Hooks/usefirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInWithGoogle} style={{marginBottom:'20px'}}>Google Signin</button>
            <form>
                <input type='email' placeholder='Email' /><br />
                <input type='password' placeholder='Password' /><br />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
};

export default Login;
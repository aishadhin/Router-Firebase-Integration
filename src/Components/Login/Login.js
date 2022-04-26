import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>Please Login</h3>
            <form>
                <input type='email' placeholder='Email' /><br />
                <input type='password' placeholder='Password' /><br />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
};

export default Login;
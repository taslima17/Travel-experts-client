import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSignin, user, setUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log('from', location.state?.from);
    const redirect_url = location.state?.from || "/home";
    const handleGoogleSignin = () => {
        googleSignin().then(res => {
            const user = res.user;
            console.log(res.user)
            setUser(user);
            history.push(redirect_url);
        }
        ).catch(e => console.log(e.message))
    }
    return (
        <div>
            <button onClick={handleGoogleSignin}>Sign In using Google</button>
        </div>
    );
};

export default Login;
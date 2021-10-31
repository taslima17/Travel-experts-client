import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSignin, setLoading, user, setUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log('from', location.state?.from);
    const redirect_url = location.state?.from || "/home";
    const handleGoogleSignin = () => {
        googleSignin().then(res => {
            setLoading(true)
            const user = res.user;
            console.log(res.user)
            history.push(redirect_url);
            setUser(user);

        }
        ).catch(e => console.log(e.message)).finally(() => setLoading(false))
    }
    return (
        <div className="my-5">
            <h4 className="py-5 text-secondary">Please Login</h4>
            <button className="p-3 bg-danger text-white w-50 fs-4" onClick={handleGoogleSignin}>Google Sign In </button>
        </div>
    );
};

export default Login;
import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:39990/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        setRedirect(true);
    }

    if(redirect){
        return <Redirect to="/home"/>
    }


    return(
        <div className="form-group">
        <form onSubmit={submit}>
            <input type="email" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)}/>

            <button className="btn btn-dark btn-lg btn-block">Log in</button>
        </form>
        </div>
    );
};

export default Login;
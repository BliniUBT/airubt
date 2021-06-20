import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:39990/api/user/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password,
                birthdate,
                phoneNumber
            })
        });

        setRedirect(true);
    }
    
    if(redirect){
        return <Redirect to="/login"/>
    }

    return ( 
        <form onSubmit={submit}> 
        <div className="form-group">
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className="form-control" name="firstname" placeholder="First Name" onChange={e => setFirstname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" className="form-control" name="lastname" placeholder="Last Name" onChange={e => setLastname(e.target.value)}/>
                </div>

            <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input type="text" className="form-control" name="email" placeholder="E-Mail" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="birthdate">Birthdate</label>
                <input type="date" className="form-control" name="birthdate" placeholder="Birthdate" onChange={e => setBirthdate(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" className="form-control" name="phoneNumber" placeholder="Phone Number" onChange={e => setPhoneNumber(e.target.value)}/>
            </div>
        </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
            </button>

        </form>


    );

};
export default Register;
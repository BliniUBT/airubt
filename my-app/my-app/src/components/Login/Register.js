import React, {useState} from 'react';

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

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

        const content = await response.json();

        console.log(content);
    }


    return (
        <form onSubmit={submit}>
        <div className="header">Register</div>  
        <div className="contento">
            <div className="formo">
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" placeholder="First Name" onChange={e => setFirstname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" placeholder="Last Name" onChange={e => setLastname(e.target.value)}/>
                </div>

            <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input type="text" name="email" placeholder="E-Mail" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="birthdate">Birthdate</label>
                <input type="date" name="birthdate" placeholder="Birthdate" onChange={e => setBirthdate(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={e => setPhoneNumber(e.target.value)}/>
            </div>
        </div>
        </div>
        <div className="footero">
            <button type="submit" className="register-btn">
                Register
            </button>
        </div>
        </form>


    );

};
export default Register;
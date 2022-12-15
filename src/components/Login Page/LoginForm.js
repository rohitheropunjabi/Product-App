import React, { useState } from 'react';

function LoginForm({ Login, error }) {
    const [info, setInfo] = useState({name:"", password:""});

    const submitHandler = z => {
        z.preventDefault();

        Login(info);
    }

    return (
        <form className="login-form" onSubmit={submitHandler}> 
            <div className="innerform">
                <h2>LogIn Portal</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="boxform">
                    <label htmlFor="name"> Username:</label>
                    <input type="text" placeholder= "Enter your Username" name="username" 
                    id="username" onChange={z => setInfo({...info, name: z.target.value})} value={info.name}/>
                </div>
                <div className="boxform">
                    <label htmlFor="password"> Password:</label>
                    <input type="password" placeholder= "Enter your Password" name="password" 
                    id="password" onChange={z => setInfo({...info, password: z.target.value})} value={info.password}/>
                </div>
                <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm;
import React, { useState } from 'react';
import ProductsHome from '../Product Page/ProductsHome';
import LoginForm from './LoginForm';

function Loginapp() {
    const adminuser = {
        name: "rohit",
        password: "rohit123"
    }
  
    const [user, setUser] = useState({name: "", password: ""});
    const [error, setError] = useState("");

    const Login = info => {
        console.log(info);

        if(info.name === adminuser.name && 
            info.password === adminuser.password)
        {
            console.log("Logged in");
            setUser({
                name: info.name,
                password: info.password
            });
        } else {
            console.log("Incorrect details. Please try again !");
            setError("Incorrect details. Please try again !");
        }
    }

    return (
        <div className="log">
            {(user.name !== "") ? (
                <ProductsHome/>
            ) : (
                <div className='App'><LoginForm Login={Login} error={error} /></div>
            )}
        </div>
  );
}

export default Loginapp;
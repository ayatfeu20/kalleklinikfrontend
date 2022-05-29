import React from 'react'

import { useState } from "react";
import {Link} from "react-router-dom";

import "./Login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "DaniDaryan",
      password: "20180918"
    },
    {
      username: "BadiDaryan",
      password: "20200513"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form w-100">
      <form onSubmit={handleSubmit}>
        <div className="input-container ">
          <label className='ml-3'>Admin </label>
          <div className='container'>
          <input type="text" name="uname" required className='' />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container  ">
          <label>Lösenord </label>
          <input type="password" name="pass" required className='' />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container w-50 ml-12" >
            <button>Submit</button>
        </div>
     </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form py-1">
        <div className="title ">Admin</div>
        {isSubmitted ? <div className='mt-20'>Admin is successfully logged in <br></br>
          <Link to="/Appointment/Display">Visa tider</Link>
        </div> : renderForm}
        
      </div>
    </div>
  );
}


export default Login
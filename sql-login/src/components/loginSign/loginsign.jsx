import React, { useState } from 'react';
import './loginsign.css';
import email from '../assets/email.png';
import password from '../assets/password.png';
import person from '../assets/person.png';

const Loginsign = () => {
  const[action,setAction]=useState("Login");

// comment
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login" ? <div> </div>:<div className='input'>
          <img src={person} alt="person" />
          <input type="text" placeholder="Name" />
        </div>}
        
        <div className='input'>
          <img src={email} alt="email" />
          <input type="email" placeholder="Email" />
        </div>
        <div className='input'>
          <img src={password} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign up"? <div></div>:<div className='forgot-password'>Lost Password?  <span>Click here</span></div>}
       <div className='submit-container'>
        <div className={action==="Login"? "submit gray ":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
        <div className={action==="Sign up"? "submit gray ":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  );
};

export default Loginsign;

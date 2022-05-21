import React, { useState } from 'react';
import './Home.css';
import { Redirect } from 'react-router-dom';
import OtpPage from './OtpPage';

export default function HomePage() {
  let [phone, setPhone] = useState(0);
  let [redirect, setRed] = useState(0);
  let [msg, setMsg] = useState('');
  let [text, setText] = useState('Continue');

  let config = {
    token: '717dc2d82d86be210bef206cf512dba9',
    mobile: phone,
    action: 'Signin_or_Signup',
    timestamp: 1652446231059,
  };

  async function continueUser() {
    setText(<i className="fas fa-spinner fa-spin"></i>);
    if (phone.length == 10) {
      await fetch('https://agcare.platform.simplifii.com/api/v1/get_otp', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(config),
      })
        .then((res) => res.json())
        .then((result) => {
          setRed(1);
          setMsg(result.msg);
        });
    } else {
      alert('Invalid Phone Number');
    }
    setText('Continue');
  }

  if (redirect) {
    return <OtpPage number={phone} msg={msg} otpFn={()=>continueUser} />;
  } else {
    return (
      <div id="mainDiv">
        <div id="innerDiv">
          <img
            src="https://i.ibb.co/7bPrN2B/Screenshot-2022-05-19-at-16-47-44-Login-and-Signup.png"
            className="centerText mx-auto"
          />

          <h4>Enter your Phone Number</h4>

          <div id="inputBox">
            <button id="phoneCode">+91</button>
            <input
              type="text"
              onKeyUp={(e) => setPhone(e.target.value)}
              id="numInput"
              placeholder="Enter Phone Number"
              required
            />
          </div>
          <button id="submitBtn" onClick={continueUser}>
            {text}
          </button>
        </div>

        <p id="footerText">Made with Love in India</p>
      </div>
    );
  }
}

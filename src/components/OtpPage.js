import React, { useState } from 'react';
import './Home.css';
import Welcome from './Welcome';

export default function OtpPage(props) {
  let [code, setCode] = useState(0);
  let [verified, setVerify] = useState(0);
  let [text, setText] = useState('Verify');
  let [timer, setTimer] = useState(30);
  let configOtp = {
    username: props.number,
    password: code,
  };

  while (timer > 0) {
    setTimer(timer - 1);
  }
  if (timer == 0) {
    setTimer('Resend OTP');
  }

  let config = {
    token: '717dc2d82d86be210bef206cf512dba9',
    mobile: props.number,
    action: 'Signin_or_Signup',
    timestamp: 1652446231059,
  };

  async function continueUser() {
    setText(<i className="fas fa-spinner fa-spin"></i>);
    await fetch('https://agcare.platform.simplifii.com/api/v1/get_otp', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(config),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result.msg);
      });
    setText('Continue');
  }

  async function verifyUser() {
    setText(<i className="fas fa-spinner fa-spin"></i>);
    if (code.length == 6) {
      await fetch(
        'https://agcare.platform.simplifii.com/api/v1/admin/authenticate',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(configOtp),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.msg == 'Success') {
            setVerify(1);
          } else {
            alert(result.msg);
          }
        });
    } else {
      alert('Invalid One Time Password');
    }
    setText('Verify');
  }

  if (verified) {
    return <Welcome name={props.number} />;
  } else {
    return (
      <div id="mainDiv">
        <div id="innerDiv">
          <img
            src="https://i.ibb.co/7bPrN2B/Screenshot-2022-05-19-at-16-47-44-Login-and-Signup.png"
            className="centerText mx-auto"
          />
          <h3>{props.msg}</h3>
          <div id="inputBox">
            <button id="phoneCode">Code</button>
            <input
              type="text"
              onKeyUp={(e) => setCode(e.target.value)}
              id="numInput"
              placeholder="Enter the OTP"
              required
            />
          </div>
          <button id="submitBtn" onClick={verifyUser}>
            {text}
          </button>
          <button id="timerBtn" onClick={props.otpFn}>
            {timer}
          </button>
        </div>

        <p id="footerText">Made with Love in India</p>
      </div>
    );
  }
}

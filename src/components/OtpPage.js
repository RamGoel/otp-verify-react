import React, { useState } from 'react';
import './Home.css';

export default function HomePage() {
  let [phone, setPhone] = useState(0);

  let config = {
    token: '717dc2d82d86be210bef206cf512dba9',
    mobile: phone,
    action: 'Signin_or_Signup',
    timestamp: 1652446231059,
  };
  function continueUser() {
    if (phone.length >= 10) {
      fetch('https://agcare.platform.simplifii.com/api/v1/get_otp', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(config),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result.msg);
        });
    } else {
      alert('Invalid Phone Number');
    }
  }

  return (
    <div id="mainDiv">
      <div id="innerDiv">
        <img
          src="https://i.ibb.co/7bPrN2B/Screenshot-2022-05-19-at-16-47-44-Login-and-Signup.png"
          className="centerText mx-auto"
        />

        <h1>{phone}</h1>
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
          Continue
        </button>
      </div>

      <p id="footerText">Made with Love in India</p>
    </div>
  );
}

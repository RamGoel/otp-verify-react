import React, { useState } from 'react';
import './Home.css';
export default function OtpPage(props) {
  let [code, setCode] = useState(0);

  let config = {
    "username": "9786752313",
     "password": "260599",
     "os": "ANDROID"
  };

  function verifyUser() {
    if (code.length ==6) {
      fetch('https://agcare.platform.simplifii.com/api/v1/admin/authenticate', {
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
      alert('Invalid One Time Password');
    }
  }
  return (
    <div id="mainDiv">
      <div id="innerDiv">
        <img
          src="https://i.ibb.co/7bPrN2B/Screenshot-2022-05-19-at-16-47-44-Login-and-Signup.png"
          className="centerText mx-auto"
        />

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
          Verify
        </button>
      </div>

      <p id="footerText">Made with Love in India</p>
    </div>
  );
}

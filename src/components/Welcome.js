import React, { useState } from 'react';
import './Home.css';

export default function Welcome(props) {
  return (
    <div id="mainDiv">
      <h2 id="welctext">Welcome, {props.name}</h2>
    </div>
  );
}

import React from 'react';
import axios from 'axios';

const Api = () => {

    const hanldeApiCall = () => {
        axios.get('http://localhost:8081/')
        .then(data => {
            console.log(data);
        });
    };

  return (
    <div style={{height:'100vh'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <h1>API Test</h1>
            <button onClick={hanldeApiCall}>CALL API</button>
        </div>
    </div>
  )
}

export default Api;
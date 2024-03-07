import React from 'react';
import { useEffect } from 'react';
import '../styles/Login.css';
import {Link,TextField, Button} from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Login = () => {

  useEffect(()=>{
    Aos.init({
      duration: 2000,
      easing: 'linear'
    });
  }, []);

  return (
    <div className='login-container'>
      <div data-aos='zoom-in-down' className='login-form'>
        <form method='POST'>
          <fieldset>
            <legend><h3>Login Form:</h3></legend>
            <div className='form-field'>
              <div>
                <TextField id='outlined-basic' label='Email Address:' variant='outlined'></TextField>
              </div>
              <div>
                <TextField id='outlined-password' label='Password:' variant='outlined'></TextField>
              </div>
              <div className='login-btn'>
                <Button variant='contained'>Login</Button>
              </div>
              <div className='signup-redirect'>
                <div>
                  <Link>forgotten your password?</Link>
                </div>
                <div>
                  <Link href='/signup'>Don't have an account yet? Register</Link>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Login
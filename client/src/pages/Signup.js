import React from 'react';
import '../styles/Signup.css';
import {Link,TextField, Button} from '@mui/material';

const Signup = () => {
  return (
    <div className='signup-container'>
       <div className='signup-form'>
        <form>
          <fieldset>
            <legend><h3>Signup Form:</h3></legend>
            <div className='form-field'>
            <div>
                <TextField id='outlined-basic' label='First Name:' variant='outlined'></TextField>
              </div>
              <div>
                <TextField id='outlined-basic' label='Last Name:' variant='outlined'></TextField>
              </div>
              <div>
                <TextField id='outlined-basic' label='Email Address:' variant='outlined'></TextField>
              </div>
              <div>
                <TextField id='outlined-basic' label='Password:' variant='outlined'></TextField>
              </div>
              <div className='signup'>
                <Button variant='contained'>Signup</Button>
              </div>
              <div className='login-redirect'>
                <div className='remember'>
                  <input type='checkbox'></input>
                  <label for='remember'> Remember me</label>
                </div>
                <div>
                  <Link href='/login'>Already have an account? Login</Link>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>

    </div>
  )
}

export default Signup
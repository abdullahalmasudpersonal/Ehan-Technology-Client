import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import auth from '../../../../firebase.init';
import './Register.css';
import { useForm } from "react-hook-form";


const Register = () => {
  const [number, setNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState('');
  const navigate = useNavigate();
  /* ---------------------- */
 /*  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user1,
    loading,
    error1,
  ] = useCreateUserWithEmailAndPassword(auth); */

  function setUpRecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',
      {}, auth);
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  const getOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (number === '' || number === undefined) return setError('Please enter a vaild phone number!');
    try {
      const response = await setUpRecaptcha(number);
      console.log(response);
      setConfirmObj(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
    console.log(number);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === '' || otp === null) return;
    try {
      setError('');
      await confirmObj.confirm(otp);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='register-bg'>
      <div className='p-4 box '>
        <h3 className='mb-3'>Phone Authontation</h3>
        <Form onSubmit={getOtp} style={{ display: !flag ? 'block' : 'none' }}>
          <Form.Group className='mb-3' controlId='formBasicPhoneNumber'>
            {/* <input className='signup-input' type='email'
              placeholder=' Email' autoComplete="off"
              {...register("email", {
                required: {
                  value: true,
                  message: 'Email is Required'
                },
                pattern: {
                  value: /[a-z0-9]+[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide a valid Email'
                }
              })}
            /> */}
            <PhoneInput
              defaultCountry='BD'
              value={number}
              onChange={setNumber}
              placeholder='Enter Phone Number'
              style={{ width: '250px', marginBottom: '10px' }}
            />
            {error && <Alert variant='danger'>{error}</Alert>}
            <div id='recaptcha-container' />
          </Form.Group>
          <div className='button-right'>
            <Link to='/'>
              <Button className='me-2' variant='secondary'>Cancel</Button>
            </Link>
            <Button variant='primary' type='submit'>Send OTP</Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? 'block' : 'none' }}>
          <Form.Group className='mb-3' controlId='formBasicotp'>
            <Form.Control
              type='otp'
              placeholder='Enter OTP'
              onChange={(e) => setOtp(e.target.value)}
              style={{ width: '250px' }}
            />
          </Form.Group>
          <div className='button-right'>
            <Link to='/'>
              <Button className='me-2' variant='secondary'>Cancel</Button>
            </Link>
            <Button variant='primary' type='submit'>Verify OTP</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;






































































/* 
import React from 'react';
import { RecaptchaVerifier } from "firebase/auth";
import auth from '../../../../firebase.init';

const Register = () => {
  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    }
  }, auth);
  return (
    <div>
      <button >submit</button>
    </div>
  );
};

export default Register; */


















/* import React, { Component } from 'react';
import firebase from '../../../../firebase.init';

export class Register extends Component {
  handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    let number = '+8801726457771';
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
      let code = prompt('enter th otp', '');
      if (code == null) return;
      e.confirm(code).then(function(result){
        console.log(result.user,'user');
        document.querySelector('label').textContent= result.user.phoneNumber + "Number Verified";

      }).catch((error)=>{
        console.log(error)
      })
      
    })
  }
  render() {
    return (
      <div>
        <label></label>
        <button
          onClick={this.handleClick}
        >Click here</button>
      </div>
    )
  }
}

export default Register; */
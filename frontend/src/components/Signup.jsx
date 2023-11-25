import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/cycle - 1700746773362.json';
import './Signup.css';
import axiosInstance from '../axios';
import { useAuth } from '../userContext';
import { Link, useNavigate } from 'react-router-dom'; 


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Signup() {
  const { user,setUser } = useAuth();
  const navigate=useNavigate()
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });

  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[user])

  async function  handleSubmit (e) {
    e.preventDefault();
    try {
      let res=await axiosInstance.post('/register',details)
      localStorage.setItem('PsUser',JSON.stringify(res.data.user))
      setUser(res.data)

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="signup-container">
      <div className="lottie-animation">
        <Lottie options={defaultOptions} />
      </div>
      <div className="flex justify-center items-center mt-16 w-2/6 mx-auto">
        <div className="container">
          <div className="heading">Sign In</div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              required
              className="input"
              type="email"
              id="email"
              placeholder="E-mail"
              value={details.email}
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
            />
            <input
              required
              className="input"
              type="password"
              id="password"
              placeholder="Password"
              value={details.password}
              onChange={(e) => setDetails({ ...details, password: e.target.value })}
            />
            <input className="login-button" type="submit" value="Sign In" />
          </form>
          <div className="signup-link text-xs flex justify-center">
            Already have account? <Link to="/login" className='font-bold text-sky-700'>Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

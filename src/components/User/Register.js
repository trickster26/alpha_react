import React, { useState, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { Link } from "react-router-dom";
import emailIcon from '../../assets/img/email.svg';
import userIcon from '../../assets/img/user.svg';
import passwordIcon from '../../assets/img/password.svg';

const Register = () => {
  console.log("jiii");
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: '', email: '', password: '', companyName: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData.username, formData.email, formData.password, formData.companyName);
  };

  return (
    <>
    <main className="form-signin w-100 d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
    <div className='sign-up-form-width shadow-sm p-3 mb-5 rounded border text-center' style={{backgroundColor:'#fff'}}>
      <form onSubmit={handleSubmit}>
        <p className="h3 mb-3 fw-bold primary-text-color">Sign Up</p>
        <div className="my-2 input-wrapper">
          <img src={userIcon} alt="User icon" />
          <input type="text" className="form-control py-3 shadow-sm rounded" id="floatingName" placeholder="Username" onChange={handleChange} required/>
        </div>
        <div className="my-2 input-wrapper">
          <img src={emailIcon} alt="Email icon" />
          <input type="email" className="form-control py-3 shadow-sm rounded" id="floatingInput" placeholder="Email" onChange={handleChange} required/>
        </div>
        <div className="my-2 input-wrapper">
          <img src={passwordIcon} alt="Password icon" />
          <input type="password" className="form-control py-3 shadow-sm rounded" id="floatingPassword" placeholder="Password" onChange={handleChange} required/>
        </div>
        <div className="my-2 input-wrapper">
          <img src={userIcon} alt="Company icon" />
          <input type="text" className="form-control py-3 shadow-sm rounded" id="floatingCName" placeholder="Company Name" onChange={handleChange} required/>
        </div>

        <button className="btn btn-primary btn-lg w-100 py-2 mt-3" type="submit">Create Account</button>
        <p className=''>Already have a account? <Link to="/login">Sign Up</Link></p>
      </form>
      </div>
    </main>
    </>
  );
};

export default Register;

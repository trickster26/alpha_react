import React, { useState, useContext, useRef, useEffect } from 'react';
import { AuthContext } from 'context/AuthContext';
import { Link } from "react-router-dom";
import emailIcon from '../../assets/img/email.svg';
import userIcon from '../../assets/img/user.svg';
import passwordIcon from '../../assets/img/password.svg';
import NotificationAlert from "react-notification-alert";

const Register = () => {
  const { register, loading, error, setError } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: '', email: '', password: '', companyName: '' });
  const [errors, setErrors] = useState({});
  const notificationAlert = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.companyName) newErrors.companyName = 'Company Name is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    
    try {
      await register(formData.username, formData.email, formData.password, formData.companyName);
      notify('success', 'Account created successfully!');
    } catch (error) {
      notify('danger', 'An error occurred. Please try again.');
    }
  };

  const notify = (type, message) => {
    const options = {
      place: 'tc', // top center
      message: (
        <div>
          <div>{message}</div>
        </div>
      ),
      type: type,
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };

  useEffect(() => {
    if (error) {
      notify('danger', error);
      setTimeout(() => {
        // Clear the error after 1.5 seconds
        setError('');
      }, 1500);
    }
  }, [error, setError]);

  return (
    <>
      <main className="form-signin w-100 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className='sign-up-form-width shadow-sm p-3 mb-5 rounded border text-center' style={{ backgroundColor: '#fff' }}>
          <NotificationAlert ref={notificationAlert} />
          <form onSubmit={handleSubmit}>
            <p className="h3 mb-3 fw-bold primary-text-color">Sign Up</p>
            {errors.username && <div className="text-danger">{errors.username}</div>}
            {errors.email && <div className="text-danger">{errors.email}</div>}
            {errors.password && <div className="text-danger">{errors.password}</div>}
            {errors.companyName && <div className="text-danger">{errors.companyName}</div>}
            <div className="my-2 input-wrapper">
              <img src={userIcon} alt="User icon" />
              <input
                type="text"
                className="form-control py-3 shadow-sm rounded"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div className="my-2 input-wrapper">
              <img src={emailIcon} alt="Email icon" />
              <input
                type="email"
                className="form-control py-3 shadow-sm rounded"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div className="my-2 input-wrapper">
              <img src={passwordIcon} alt="Password icon" />
              <input
                type="password"
                className="form-control py-3 shadow-sm rounded"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div className="my-2 input-wrapper">
              <img src={userIcon} alt="Company icon" />
              <input
                type="text"
                className="form-control py-3 shadow-sm rounded"
                placeholder="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <button className="btn btn-primary btn-lg w-100 py-2 mt-3" type="submit" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
            <p>Already have an account? <Link to="/login">Sign In</Link></p>
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;

import React, { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from 'context/AuthContext';
import emailIcon from '../../assets/img/email.svg';
import passwordIcon from "../../assets/img/password.svg";
// import styles from "../../assets/css/SignUp.module.css";
import { useNavigate, Link } from "react-router-dom";
import NotificationAlert from "react-notification-alert";
import { Navbar } from 'components/Navbars/Navbar';
// import userIcon from '../../assets/img/user.svg';

const Login = () => {
  const { login, loading, error, setError } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const notificationAlert = useRef(null);
  const navigate = useNavigate();

  const validate = (name, value) => {
    let error = '';

    if (name === 'email') {
      if (!value) {
        error = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Email address is invalid';
      }
    }

    if (name === 'password') {
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 6) {
        // error = 'Password must be at least 6 characters';
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (touched[name]) {
      const error = validate(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });

    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailError = validate('email', formData.email);
    const passwordError = validate('password', formData.password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    try {
      await login(formData.email, formData.password);
      navigate('/admin/dashboard');
    } catch (error) {
      // Handle error within the context if needed
    }
  };

  const showNotification = (message) => {
    const options = {
      place: 'tr',
      message: (
        <div>
          <div>{message}</div>
        </div>
      ),
      type: 'danger',
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };

  useEffect(() => {
    console.log(error)
    if (error.length > 0) {
      showNotification(error);
      setTimeout(() => {
        setError('');
      }, 1500);  // Clear the error after 1.5 seconds
    }
  }, [error, setError]);

  return (
    <>
      <Navbar />
      <main className="form-signin w-100 d-flex align-items-center justify-content-center hero-section" style={{ minHeight: '100vh' }}>
        <div className='sign-up-form-width shadow-sm p-4 mb-5 rounded border text-center' style={{ backgroundColor: '#fff' }}>
          <NotificationAlert ref={notificationAlert} />
          <form onSubmit={handleSubmit}>
            <p className="h3 mb-4 fw-bold text-primary">Sign In</p>
            {errors.email && <div className="text-danger">{errors.email}</div>}
            {errors.password && <div className="text-danger">{errors.password}</div>}
            <div className="my-2 input-wrapper">
              <img src={emailIcon} alt="Email icon" />
              <input
                type="text"
                className="form-control py-3 shadow-sm rounded"
                placeholder="Email"
                name="email"
                value={formData.email}
                onBlur={handleBlur}
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
                onBlur={handleBlur}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <button className="main-btn btn-hover rounded w-100 py-2 my-2" type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <p className='ptext-sm' style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
              Don't have an account? <Link className='text-primary' to="/signup">Create account</Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;

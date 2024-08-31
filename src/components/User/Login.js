import React, { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from 'context/AuthContext';
import emailIcon from '../../assets/img/email.svg';
import passwordIcon from "../../assets/img/password.svg";
import styles from "../../assets/css/SignUp.module.css";
import { Link } from "react-router-dom";
import NotificationAlert from "react-notification-alert";

const Login = () => {
  const { login, loading, error, setError } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const notificationAlert = useRef(null);

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
        error = 'Password must be at least 6 characters';
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
    <div className={styles.container}>
      <NotificationAlert ref={notificationAlert} />
      <form className={styles.formLogin} autoComplete="off" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <div>
          <div>
            <input 
              type="text" 
              name="email" 
              value={formData.email} 
              placeholder="E-mail" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              autoComplete="off" 
              disabled={loading}  // Disable input if loading
            />
            <img src={emailIcon} alt="" />
            {touched.email && errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>
        </div>

        <div>
          <div>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              placeholder="Password" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              autoComplete="off"
              disabled={loading}  // Disable input if loading
            />
            <img src={passwordIcon} alt="" />
            {touched.password && errors.password && <div className={styles.error}>{errors.password}</div>}
          </div>
        </div>
      
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
            Don't have an account? <Link to="/signup">Create account</Link>
          </span>
          <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
            <Link to="/resetPassword">Forget Password</Link>
          </span>
        </div>
  
      </form>
    </div>
  );
};

export default Login;

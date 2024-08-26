import React, { useState, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import emailIcon from '../../assets/img/email.svg';
import passwordIcon from "../../assets/img/password.svg";
import styles from "../../assets/css/SignUp.module.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "IsAccepted") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  
// const chaeckData = (obj) => {
//   const { email, password } = obj;
//   const urlApi = `https://lightem.senatorhost.com/login-react/index.php?email=${email.toLowerCase()}&password=${password}`;
//   const api = axios
//     .get(urlApi)
//     .then((response) => response.data)
//     .then((data) => (data.ok ? notify("You login to your account successfully", "success") : notify("Your password or your email is wrong", "error")));
//   toast.promise(api, {
//     pending: "Loading your data...",
//     success: false,
//     error: "Something went wrong!",
//   });
// };


  return (
    <div className={styles.container}>
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
              onFocus={focusHandler} 
              autoComplete="off" 
            />
            <img src={emailIcon} alt="" />
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
              onFocus={focusHandler} 
              autoComplete="off" />
            <img src={passwordIcon} alt="" />
          </div>
        </div>
      
        <div>
          <button type="submit">Login</button>
          <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
            Don't have a account? <Link to="/signup">Create account</Link>
          </span>
        </div>
  
    </form>
    {/* <ToastContainer /> */}
    </div>
  );
};

export default Login;
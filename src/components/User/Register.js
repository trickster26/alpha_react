import React, { useState, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';

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
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardHeader>
                <CardTitle tag="h4">Campaigns</CardTitle>
              </CardHeader>
              <CardBody>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                  <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                  <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                  <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} required />
                  <button type="submit">Register</button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Register;

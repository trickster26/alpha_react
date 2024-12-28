import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const AddCustomerForm = ({ show, handleClose, refreshList }) => {
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/customers/addcustomers`, customer);
            handleClose();
            refreshList(); // Reload customer list
        } catch (error) {
            console.error('Error adding customer', error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <div className="custom-modal-title">
                    <p className=''>Add New Customer</p>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <div className="my-2 ">
                        <input
                            type="text"
                            className="form-control py-3 shadow-sm rounded"
                            placeholder="First Name"
                            name="firstName"
                            value={customer.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-2 ">
                        <input
                            type="text"
                            className="form-control py-3 shadow-sm rounded"
                            placeholder="Last Name"
                            name="lastName"
                            value={customer.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-2 ">
                        <input
                            type="email"
                            className="form-control py-3 shadow-sm rounded"
                            placeholder="Email Address"
                            name="email"
                            value={customer.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="my-2 ">
                        <input
                            type="text"
                            className="form-control py-3 shadow-sm rounded"
                            placeholder="Phone Number"
                            name="phone"
                            value={customer.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='text-end'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddCustomerForm;

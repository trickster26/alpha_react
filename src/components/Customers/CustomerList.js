import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Spinner } from 'react-bootstrap';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch customers from API
    const fetchCustomers = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/customers`);
            setCustomers(response.data.data);
            setLoading(false); // Stop loading once data is fetched
        } catch (error) {
            console.error('Error fetching customers', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const handleEdit = (customerId) => {
        console.log('Edit customer with ID:', customerId);
    };

    // Handle the delete button click
    const handleDeleteClick = (customerId) => {
        // Show browser confirm dialog
        const isConfirmed = window.confirm("Are you sure you want to delete this customer?");
        if (isConfirmed) {
            // If confirmed, send DELETE request to the server
            deleteCustomer(customerId);
        }
    };

    // Send DELETE request to the server to delete a customer
    const deleteCustomer = async (customerId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/customers/deletecustomer/${customerId}`);
            fetchCustomers();
            alert('Customer deleted successfully!');
        } catch (error) {
            console.error('Error deleting customer', error);
            alert('Failed to delete customer.');
        }
    };

    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true,
            searchable: true,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true,
            searchable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            searchable: true,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
            searchable: true,
        },
        {
            name: 'Actions',
            variant:"danger",
            button:"true",
            cell: (row) => (
                <div className='d-flex justify-content-center align-items-center'>
                    <button className='btn btn-primary'
                        onClick={() => handleEdit(row.id)} 
                        style={{ padding: '12px', cursor: 'pointer' }}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className='btn btn-danger'
                        onClick={() => handleDeleteClick(row.id)} 
                        style={{ padding: '12px', cursor: 'pointer' }}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            ),
        },
    ];

    const customLoader = (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <Spinner animation="border" variant="primary" />
            <p>Loading data... Please wait.</p>
        </div>
    );

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#e2e3e5',
                color: '#000',
                fontWeight: 'bold',
                fontSize: '16px'
            },
        },
        rows: {
            style: {
                fontSize: '16px', // Set font size for table rows
            },
        },
    };

    return (
        <div className="table-responsive">
            <DataTable
                columns={columns}
                data={customers}
                pagination
                highlightOnHover
                pointerOnHover
                customStyles={customStyles}
                responsive
                progressPending={loading}
                progressComponent={customLoader}
                persistTableHead
                search
            />
        </div>
    );
};

export default CustomerList;

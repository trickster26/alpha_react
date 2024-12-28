import React, { useState } from 'react';
import AddCustomerForm from './AddCustomerForm';
// import UploadCSV from './UploadCSV';
import CustomerList from './CustomerList';


function Customer() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="container content">
            <div className="row align-items-start">
                <div className="col pb-3 text-end">
                    <button className="btn btn-primary" onClick={handleShow}><i class="fa-solid fa-plus"></i> Add Customer</button>
                    <AddCustomerForm show={showModal} handleClose={handleClose} refreshList={() => window.location.reload()} />
                    {/* <UploadCSV refreshList={() => window.location.reload()} /> */}
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col">
                    <CustomerList />
                </div>
            </div>
        </div>
    );
}

export default Customer;

import React, { useState } from 'react';
import axios from 'axios';

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('CompanyID', 1); // Replace with actual CompanyID

    try {
      const response = await axios.post('/api/campaigns/upload', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error uploading file');
    }
  };

  return (
    <div>
      <h2>Upload CSV</h2>
      <a href="/download-template" download>Download Dummy CSV Template</a>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} required />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadCSV;

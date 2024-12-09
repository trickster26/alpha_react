import React, { useState } from 'react';
import { customerService } from '../../services/api';

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(null);
    setSuccess(false);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const csvData = event.target.result;
          const lines = csvData.split('\n');
          const headers = lines[0].split(',');
          
          // Validate headers
          const requiredHeaders = ['firstName', 'lastName', 'email', 'phone'];
          const hasAllHeaders = requiredHeaders.every(header => 
            headers.map(h => h.trim().toLowerCase()).includes(header.toLowerCase())
          );

          if (!hasAllHeaders) {
            throw new Error('CSV must include firstName, lastName, email, and phone columns');
          }

          // Parse CSV data
          const customers = lines.slice(1).map(line => {
            const values = line.split(',');
            return {
              firstName: values[0].trim(),
              lastName: values[1].trim(),
              email: values[2].trim(),
              phone: values[3].trim()
            };
          }).filter(customer => customer.email); // Filter out empty rows

          // Upload to server
          await customerService.uploadCSV({ customers });
          setSuccess(true);
        } catch (error) {
          setError(error.message);
        }
      };
      reader.readAsText(file);
    } catch (error) {
      setError('Error processing file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Upload Customer CSV</h4>
        </div>
        <div className="card-body">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {success && (
            <div className="alert alert-success" role="alert">
              Customers uploaded successfully!
            </div>
          )}
          <form onSubmit={handleUpload}>
            <div className="form-group">
              <label>Select CSV File</label>
              <input
                type="file"
                className="form-control"
                accept=".csv"
                onChange={handleFileChange}
              />
              <small className="form-text text-muted">
                CSV should include columns: firstName, lastName, email, phone
              </small>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading || !file}
            >
              {loading ? 'Uploading...' : 'Upload'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadCSV; 
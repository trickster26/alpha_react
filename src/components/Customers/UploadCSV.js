import React from 'react'; // Add useState import
import { useCSVReader } from 'react-papaparse';
import axios from 'axios';

const UploadCSV = ({ refreshList }) => {
  const { CSVReader } = useCSVReader(); // Use the CSVReader from react-papaparse

  // Function to handle the file data after parsing
  const handleUpload = (data) => {
    const customers = data.map(item => ({
      firstName: item.data[0],
      lastName: item.data[1],
      email: item.data[2],
      phone: item.data[3]
    }));

    // Ask for confirmation before uploading
    const isConfirmed = window.confirm('Are you sure you want to upload this CSV?');
    if (isConfirmed) {
      uploadCSV(customers); // Call upload function with parsed customers
    }
  };

  // Upload parsed CSV data to the server
  const uploadCSV = async (customers) => {
    try {
      await axios.post('/addcustomercsv', { customers });
      refreshList(); // Refresh the customer list after upload
      alert('CSV uploaded successfully!');
    } catch (error) {
      console.error('Error uploading CSV', error);
      alert('Error uploading CSV');
    }
  };

  return (
    <div>
      {/* CSVReader component for handling file upload */}
      <CSVReader
        onFileLoaded={handleUpload} // Trigger handleUpload when file is loaded
        config={{ header: false, skipEmptyLines: true }} // Skip empty lines and don't expect a header row
      >
        {({ fileRejections, getRootProps, acceptedFile }) => (
          <div>
            {/* Button to upload file */}
            <div {...getRootProps()}>
              <button type="button">Upload CSV</button>
            </div>

            {/* Display the name of the uploaded file */}
            {acceptedFile?.name && <div>{acceptedFile.name}</div>}

            {/* Show error messages if the file is rejected */}
            {fileRejections.length > 0 && (
              <div>
                {fileRejections[0].errors.map((e, index) => (
                  <div key={index}>{e.message}</div>
                ))}
              </div>
            )}
          </div>
        )}
      </CSVReader>
    </div>
  );
};

export default UploadCSV;

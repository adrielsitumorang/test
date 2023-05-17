import React, { useState } from "react";
import imagePlaceholder from "./R_Indonesia.png";
import './styles.css';

function ImageUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [responseData, setResponseData] = useState(null); // new state variable
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      const response = await fetch('http://localhost:5000/upload-image', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      console.log(data);
      setResponseData(data.image_url); // update response data state
      setSubmitted(true);
      setImageUrl2(data.image_url);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      const response = await fetch('http://localhost:5000/upload-image', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      console.log(data);
      setResponseData(data.image_url); // update response data state
      setImageUrl(data.image_url);
    } catch (error) {
      console.error(error);
    }
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h1 style={{ textAlign: "center" }}>Website BNPB Indonesia</h1>  
        <img src={imagePlaceholder} alt="placeholder" style={{ height: "400px", width: "1200px" }} />
      <h2 style={{marginTop: "100px" }}>Upload Gambar Daerah Sebelum Bencana</h2>
      <form onSubmit={handleSubmit1}>
        <label>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </label>
      </form>
      <h2 style={{marginTop: "100px" }}>Upload Gambar Daerah Setelah Bencana</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </label>
      </form>
      {submitted && (
        <div style={{ textAlign: 'center', marginLeft: '20px' }}>
          <p>Your image was uploaded successfully!</p>
          <div class="image-container">
            <div class="image">
              <img src={`http://127.0.0.1:8080/uploads/${imageUrl}`} alt="Uploaded Image" style={{ height: "400px", width: "400px" }}/>
              <p className="note1">Sebelum Bencana</p>
            </div>
            <div class="image">
              <img src={`http://127.0.0.1:8080/uploads/${imageUrl2}`} alt="Uploaded Image" style={{ height: "400px", width: "400px" }}/>
              <p className="note2">Setelah Bencana</p>
            </div>
          </div>
        </div>
      )}
      <h2 style={{marginTop: "50px" }}>Dampak bencana</h2>
      {submitted ? <p>No Damage = 10</p> : null}
      {submitted ? <p>Major Damage = 20</p> : null}
      {submitted ? <p>Minor Damage = 30</p> : null}
      {submitted ? <p>Destroyed Damage = 40</p> : null}
    </div>
  );
}

export default ImageUploadForm;

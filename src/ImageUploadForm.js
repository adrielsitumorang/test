import React, { useState } from "react";
import imagePlaceholder from "./R_Indonesia.png";

function ImageUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the selected file
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h1 style={{ textAlign: "center" }}>Website Bencana</h1>  
        <img src={imagePlaceholder} alt="placeholder" style={{ height: "400px", width: "1200px" }} />
      <h2 style={{marginTop: "100px" }}>Upload gambar daerah disini</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ImageUploadForm;

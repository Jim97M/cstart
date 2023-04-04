import { useState, useRef } from "react";
import './FilePreview.scss';

export default function FilePreviewer() {
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const filePicekerRef = useRef(null);
 
  function previewFile(e) {
    // Reading New File (open file Picker Box)
    const reader = new FileReader();
    // Gettting Selected File (user can select multiple but we are choosing only one)
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
    // As the File loaded then set the stage as per the file type
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("image")) {
        setImagePreview(readerEvent.target.result);
      } else if (selectedFile.type.includes("video")) {
        setVideoPreview(readerEvent.target.result);
      }
    };
  }
  function clearFiles() {
    setImagePreview(null);
    setVideoPreview(null);
  }
  return (
    <div className="image_container">

      <div className="btn-container">

      <h3>Preview Image/Video</h3>
      <div className="below-container">
        <input ref={filePicekerRef} accept="image/*, video/*" onChange={previewFile} type="file" hidden />
        <button className="btn" onClick={() => filePicekerRef.current.click()}>
           <h3 style={{color: 'white', marginTop: -1}}> Choose </h3></button>
        <button className="btn_clear" onClick={() => clearFiles()}>
           <h1 style={{color: 'white', marginTop: 7}}> x </h1></button>
          </div>
          {/* <div className="progress_bar"> */}
      {/* <progress style={{width: 520, height: 50}} placeholder="File progress"  value="0" max="100" /> */}
      {/* </div> */}
      <div className="preview">
          <label style={{fontWeight: 'bold', fontSize: 16}}> File Preview: </label>
        {videoPreview != null && <video height={400} width={400} autoPlay src={videoPreview}></video>}
      </div>
      </div>
   
    </div>
  );
}

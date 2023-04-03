import React, { useState } from 'react';
import AWS from 'aws-sdk';


const UploadYoutubeLink = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const s3 = new AWS.S3({
      accessKeyId: '',
      secretAccessKey: '',
    });

    const params = {
      Bucket: 'amesite-video-project1',
      Key: selectedFile.name,
      Body: selectedFile,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`File uploaded successfully. ${data.Location}`);
      }
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadYoutubeLink;

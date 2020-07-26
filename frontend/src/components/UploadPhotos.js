import React, { useState } from "react";
import axios from "axios";

const UploadPhotos = (props) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (event) => {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "pictures");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/akups/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    console.log(file.secure_url);
    const { roomId } = props.match.params;
    //console.log(roomId);

    axios
      .patch(`${process.env.REACT_APP_BACKENDURL}api/updateroom/${roomId}`, {
        secureUrl: file.secure_url,
      }) // passing roomId to the axios call
      .then(({ data }) => {
        console.log(data);
      });

    setLoading(false);
  };

  return (
    <div style={{ height: "60vh" }}>
      <h1>Upload Images</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading....</h3>
      ) : (
        <img src={image} style={{ width: "300px" }} alt="" />
      )}
      <button type="submit">Submit</button>
    </div>
  );
};
export default UploadPhotos;

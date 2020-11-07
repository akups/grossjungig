import React, { useState } from "react";
import axios from "axios";

const uploadImage = async (event, setImage, setLoading, props) => {
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
  // const roomId  = props.match.params.roomId;
  // object inline destructuring
  //console.log(roomId);

  axios
    .patch(`${process.env.REACT_APP_BACKENDURL}api/updateroom/${roomId}`, {
      secureUrl: file.secure_url,
    }) // passing roomId to the axios call
    .then(({ data }) => {
      console.log(data);
      setLoading(false);
    });
};

const UploadPhotos = (props) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ height: "60vh" }}>
      <h1>Upload Images</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={(e) => uploadImage(e, setImage, setLoading, props)}
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

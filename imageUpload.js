import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const image = useState(null);
  const uploader = useState(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = image;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={uploader}
        style={{
          display: "none",
        }}
      />
      <div
        style={{
          height: "300px",
          width: "300px",
          border: "1px solid black",
        }}
        onClick={() => uploader.current.click()}
      >
        <img
          ref={image}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      ^ Upload Image ^
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { useCallback, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import ImageSection from "./components/ImageSection";

const App = () => {
  const [imageUrl, setImageUrl] = useState();
  const [downloadUrl, setDownloadUrl] = useState();

  useEffect(() => {
    if (!imageUrl) return;
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      setDownloadUrl(canvas.toDataURL("image/jpg"));
    });
  }, [imageUrl])

  const onChangeHandler = useCallback((e) => {
    const reader = new FileReader();

    reader.onloadend = (e) => setImageUrl(e.target.result);
    reader.readAsDataURL(e.target.files[0]);
  }, [])


  return (
    <div className="App">
      <h2>★이미지 자막 추가★</h2>
      <ImageSection imageUrl={imageUrl} />
      <input type='file' accept="image/*" onChange={onChangeHandler} />
      <a href={downloadUrl} download={"download.jpg"}>
        다운로드
      </a>
    </div>
  );
};

export default App;

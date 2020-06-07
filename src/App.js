import React, { useCallback, useState } from "react";
import html2canvas from "html2canvas";

const App = () => {
  const [downloadUrl, setDownloadUrl] = useState();

  const onClickHandler = useCallback(() => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      console.log(canvas);
      setDownloadUrl(canvas.toDataURL("image/jpg"));
    });
  }, []);
  return (
    <div className="App">
      <div
        id="capture"
        style={{ padding: "10px", background: "#f5da55" }}
        onClick={onClickHandler}
      >
        <h4 style={{ position: "relative", color: "#000" }}>Hello world!</h4>
        <h2 style={{ position: "absolute", top: "30px" }}>문자열</h2>
      </div>
      <a href={downloadUrl} download={"download.jpg"}>
        다운로드
      </a>
    </div>
  );
};

export default App;

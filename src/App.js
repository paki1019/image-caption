import React, { useCallback, useState } from "react";
import html2canvas from "html2canvas";
import ImageSection from "./components/ImageSection";
import styled from "styled-components";
import EmptyImageSection from "./components/EmptyImage";
import CaptionSection from "./components/CaptionSection";

const App = () => {
  const [imageUrl, setImageUrl] = useState();
  const [imageName, setImageName] = useState();
  const [caption, setCaption] = useState("");
  const [height, setHeight] = useState();
  const [color, setColor] = useState("white");

  const onClickHandler = useCallback(
    (e) => {
      e.preventDefault();
      html2canvas(document.querySelector("#capture")).then((canvas) => {
        var link = document.createElement("a");
        link.download = imageName;
        link.href = canvas.toDataURL();
        link.click();
      });
    },
    [imageName]
  );

  const onClickHandler2 = useCallback(
    (e) => {
      e.preventDefault();
      if (color === "white") {
        setColor("black");
      } else {
        setColor("white");
      }
    },
    [color]
  );

  const onChangeHandler = useCallback((e) => {
    const reader = new FileReader();
    const fileName = e.target.files[0]?.name?.split(".")[0] + "_sub.jpg";

    setImageName(fileName);

    reader.onloadend = (e) => setImageUrl(e.target.result);
    reader.readAsDataURL(e.target.files[0]);
  }, []);

  const onChangeHandler2 = useCallback((e) => {
    setCaption(e.target.value);
  }, []);

  return (
    <DivApp className="App">
      <h2>★이미지 자막 추가★</h2>
      {!imageUrl && <EmptyImageSection />}
      <div id="capture" style={{ maxWidth: " 512px", maxHeight: "512px" }}>
        {imageUrl && <ImageSection imageUrl={imageUrl} setHeight={setHeight} />}
        {imageUrl && caption && (
          <CaptionSection caption={caption} height={height} color={color} />
        )}
      </div>
      <div>
        <input type="file" accept="image/*" onChange={onChangeHandler} />
      </div>
      <div>
        <textarea onChange={onChangeHandler2} />
        <button onClick={onClickHandler2}>{color}</button>
      </div>
      <div>
        <button onClick={onClickHandler}>다운로드</button>
      </div>
    </DivApp>
  );
};

const DivApp = styled.div`
  padding-left: 10px;
`;

export default App;

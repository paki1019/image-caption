import React, { useCallback, useState } from "react";
import ImageSection from "./components/ImageSection";
import styled from "styled-components";
import EmptyImageSection from "./components/EmptyImage";
import CaptionSection from "./components/CaptionSection";
import ButtonDownload from "./components/ButtonDownload";
import InputImageFile from "./components/InputImageFile";

const App = () => {
  const [imageUrl, setImageUrl] = useState();
  const [imageName, setImageName] = useState();
  const [caption, setCaption] = useState("");
  const [height, setHeight] = useState();
  const [color, setColor] = useState("white");
  const [fontSize, setFontSize] = useState(9);  

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
          <CaptionSection
            caption={caption}
            height={height}
            color={color}
            fontSize={fontSize}
          />
        )}
      </div>
      <div>
        <InputImageFile setImageName={setImageName} setImageUrl={setImageUrl} />
      </div>
      <div>
        <textarea onChange={onChangeHandler2} />
        <br />
        <button onClick={onClickHandler2}>{color}</button>
        <br />
        <input
          value={fontSize}
          onChange={(e) => {
            e.preventDefault();
            setFontSize(e.target.value);
          }}
        />
      </div>
      <div>
        <ButtonDownload imageUrl={imageUrl} imageName={imageName} />
      </div>
    </DivApp>
  );
};

const DivApp = styled.div`
  padding-left: 10px;
`;

export default App;

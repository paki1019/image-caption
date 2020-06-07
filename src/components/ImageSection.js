import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const ImageSection = ({ imageUrl, setHeight }) => {
  const ref = useRef();

  useEffect(() => {
      console.log(ref.current.height)
    setHeight(ref.current.height)
  },[imageUrl, setHeight])

  return (
    <Div>
      <Img src={imageUrl} alt="이미지" ref={ref}/>
    </Div>
  );
};

const Img = styled.img`
  max-width: 512px;
  max-height: 512px;
`;

const Div = styled.div`
  top: 0px;
`;

export default ImageSection;

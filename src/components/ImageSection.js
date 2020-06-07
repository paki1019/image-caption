import React from "react";
import styled from "styled-components";

/**
 * 이미지 영역
 */
const ImageSection = ({ imageUrl }) => {
  if (!imageUrl) return <Div>이미지 영역</Div>;
  return <img id="capture" src={imageUrl} alt="이미지" />;
};

const Div = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  text-align: center;
`;

export default ImageSection;

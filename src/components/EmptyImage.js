import React from "react";
import styled from "styled-components";

/**
 * 이미지 영역 공백
 */
const EmptyImageSection = () => {
  return <Div>이미지 영역</Div>;
};

const Div = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  text-align: center;
  margin-bottom: 10px;
`;

export default EmptyImageSection;

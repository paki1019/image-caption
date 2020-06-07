import React, { useMemo } from "react";
import styled from "styled-components";

const CaptionSection = ({ caption, height, color }) => {
  const style = useMemo(() => ({ top: height * 4 / 5 }), [height]);

  return (
    <Div style={style}>
      <pre style={{color}}>{caption}</pre>
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  top: 0px;
`;
export default CaptionSection;

import React, { useCallback } from "react";
import html2canvas from "html2canvas";

/**
 * 결과 이미지 다운로드
 */
const ButtonDownload = ({ imageUrl, imageName }) => {
  const downloadCapture = useCallback(() => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      var link = document.createElement("a");
      link.download = imageName;
      link.href = canvas.toDataURL();
      link.click();
    });
  }, [imageName]);

  const onClickHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (!imageUrl) return;
      downloadCapture();
    },
    [downloadCapture, imageUrl]
  );

  return <button onClick={onClickHandler}>다운로드</button>;
};
export default ButtonDownload;

import React, { useRef, useCallback } from "react";
import Button from "../Button/Button";

const ExportButton = (props) => {
  function downloadBlob(blob, filename) {
    const objectUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
  }
  const contentDownloadRef = useRef();

  const downloadHTML = useCallback(() => {
    const svg = contentDownloadRef.current.innerHTML;
    const blob = new Blob([svg], { type: "text/html" });
    downloadBlob(blob, `template.html`);
  }, []);
  return (
    <div>
      <div ref={contentDownloadRef}>{props.children}</div>

      <Button onClick={downloadHTML} text="Export as HTML" />
    </div>
  );
};
export default ExportButton;

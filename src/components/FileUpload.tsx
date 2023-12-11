import React, { useMemo, useCallback } from "react";
import { FaFileAlt } from "react-icons/fa";
import { BsFileEarmarkImage } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import { Button } from "./Button";
import { ProgressBar } from "./ProgressBar";

const baseStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  paddingTop: "30px",
  paddingBottom: "30px",
  borderWidth: 1,
  borderRadius: "5px",
  borderColor: "#c1c1c1",
  borderStyle: "dashed",
  color: "#19075d",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle: React.CSSProperties = {
  borderColor: "#2196f3",
};

const acceptStyle: React.CSSProperties = {
  borderColor: "#00e676",
};

const rejectStyle: React.CSSProperties = {
  borderColor: "#ff1744",
};

export const FileUpload = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    if (acceptedFiles.length > 0) {
      alert(acceptedFiles[0]?.name);
      return;
    }
  }, []);

  const { getRootProps, getInputProps, open, isFocused, isDragAccept, isDragReject } = useDropzone({ onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          padding: "15px",
          border: "1px solid #c1c1c1",
          borderRadius: "10px",
        }}
      >
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <FaFileAlt size={24} color="#e5a600" />
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            Drag & Drop Here Or
            <span style={{ fontWeight: 700 }}> Browse</span>
          </p>
        </div>
        <Button width={"250px"} onClick={open}>
          Upload Manifest
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          gap: "10px",
          padding: "10px",
          marginTop: "15px",
          marginBottom: "15px",
          borderTop: "1px solid #e9e9e9",
          borderBottom: "1px solid #e9e9e9",
        }}
      >
        <div>
          <BsFileEarmarkImage size={24} color="#e5a600" />
        </div>
        <div style={{ width: "100%" }}>
          <ProgressBar text="WN-DAL-0726-NH20166.csv" percentage={5.7} />
        </div>
      </div>
    </div>
  );
};

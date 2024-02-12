/* eslint-disable no-unused-vars */
import "../css/RFC.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayout } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function RFC() {
  const [files, setFiles] = useState([]);
  const [pdfDocument, setPdfDocument] = useState(null);

  useEffect(() => {
    getRFC();
  }, []);

  const getRFC = async () => {
    try {
      const response = await axios.get("http://localhost:4001/rfc");
      setFiles(response.data);
      if (response.data.length >  0) {
        loadPDF(response.data[0].url); // Load the first PDF document
      }
    } catch (error) {
      console.error("Error loading RFC", error.message);
    }
  };
  const loadPDF = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      reader.onloadend = () => {
        setPdfDocument(new Uint8Array(reader.result));
      };
    } catch (error) {
      console.error("Error loading PDF", error.message);
    }
  };

  return (
    <div className="container rfc-container">
      <div className="title-rfc">
          <h2 className="mt-5 mb-5 underline underline-offset-8 animate-pulse text-3xl">
            Dokumen RFC-2350 WASKITA-CSIRT
          </h2>
      </div>
      <div className="pdf-rfc">
        {pdfDocument && (
          <Viewer
            fileUrl={URL.createObjectURL(new Blob([pdfDocument]))}
            layout={defaultLayout}
          />
        )}
      </div>
    </div>
  );
}

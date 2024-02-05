import { useState } from "react";
import { PanduanData } from "../data/datas";
import { Link } from "react-router-dom";

export default function Panduan() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="panduan">
      <div className="dropdown">
        <div className="paste-button">
          <button className="button">Dokumen Panduan &nbsp; ▼</button>
          <div className="dropdown-content">
            {PanduanData.DataPanduan.map((items, index) => (
              <ul key={index}>
                <li>
                  <Link
                    className="sidebar-button"
                    onClick={() => setSelectedPdf(items.filePdf)}
                  >
                    {items.title}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="container panduan-container">
        <div className="sidebar">
          {PanduanData.DataPanduan.map((items, index) => (
            <ul
              key={index}
              className="side-list"
              style={index === 0 ? { marginTop: "5px" } : { marginTop: "0" }}
            >
              <li className={selectedPdf === items.filePdf ? "active" : ""}>
                <Link
                  className="sidebar-button"
                  onClick={() => setSelectedPdf(items.filePdf)}
                >
                  {items.title}
                </Link>
              </li>
            </ul>
          ))}
        </div>
        <div className="pdfbar">
          {selectedPdf ? (
            <object
              data={selectedPdf}
              type="application/pdf"
              width="100%"
              height="95%"
              style={{
                marginBottom: "20px",
                marginTop: "20px",
                backgroundColor: "grey",
              }}
            >
              <p>
                Untuk melihat file PDF, anda memerlukan plugin PDF. Anda bisa{" "}
                <a
                  href={selectedPdf}
                  download={selectedPdf}
                  className="font-bold text-blue-800"
                >
                  {" "}
                  klik disini
                </a>{" "}
                untuk mendownload file PDF-nya
              </p>
            </object>
          ) : (
            <p>PDF Will Show Here</p>
          )}
        </div>
      </div>
    </div>
  );
}

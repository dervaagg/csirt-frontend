import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Panduan() {
  const [selectedPanduanId, setSelectedPanduanId] = useState(null);
  const [panduan, setPanduan] = useState([]);
  const [, setSelectedPanduanUrl] = useState("");

  useEffect(() => {
    getPanduan();
    const refreshInterval = setInterval(() => {
      getPanduan();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getPanduan = async () => {
    try {
      const response = await axios.get("http://localhost:4001/panduan");
      setPanduan(response.data);
    } catch (error) {
      console.error("Gagal Memuat Dokumen Panduan", error.message);
    }
  };

  const handlePanduanClick = async (panduanId, url) => {
    setSelectedPanduanId(panduanId);
    setSelectedPanduanUrl(url);
  };

  const selectedPanduan = panduan.find(p => p.id === selectedPanduanId);

  return (
    <div className="panduan">
      <div className="dropdown">
        <div className="paste-button">
          <button className="button">Dokumen Panduan &nbsp; ▼</button>
          <div className="dropdown-content">
            {panduan.map((panduan, index) => (
              <ul key={index}>
                <li>
                  <Link
                    className="sidebar-button"
                    onClick={() => handlePanduanClick(panduan.id, panduan.url)}
                  >
                    {panduan.file_title}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="container panduan-container">
        <div className="sidebar">
          {panduan.map((panduan, index) => (
            <ul
              key={index}
              className="side-list"
              style={index === 0 ? { marginTop: "5px" } : { marginTop: "0" }}
            >
              <li className={selectedPanduanId === panduan.id ? "active" : ""}>
                <Link
                  className="sidebar-button"
                  onClick={() => setSelectedPanduanId(panduan.id)}
                >
                  {panduan.file_title}
                </Link>
              </li>
            </ul>
          ))}
        </div>
        <div className="pdfbar" style={{ textAlign: "center" }}> 
          <React.Fragment>
            {selectedPanduanId ? (
              <>
                <object
                  data={selectedPanduan.url}
                  type="application/pdf"
                  width="100%"
                  height="800px"
                  style={{
                    marginTop: "20px",
                    borderRadius: "5px",
                    boxShadow: "0  0  5px  0 rgba(0,  0,  0,  3)",
                  }}
                >
                  <p>
                    Untuk melihat file PDF, anda memerlukan plugin PDF. Anda
                    bisa
                    <a
                      href={panduan.url}
                      download={panduan.url}
                      className="font-bold text-blue-800"
                    >
                      klik disini
                    </a>
                    untuk mendownload file PDF-nya
                  </p>
                </object>
              </>
            ) : (
              <div className="No-PDF">
                <p>dokumen akan tampil di sini</p>
              </div>
            )}
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}

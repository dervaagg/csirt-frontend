import "../css/RFC.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function RFC() {
  const [file, setFile] = useState([]);

  useEffect(() => {
    getRFC();
  }, []);

  const getRFC = async () => {
    try {
      const response = await axios.get("http://localhost:4001/rfc");
      setFile(response.data);
    } catch (error) {
      console.error("Error loading RFC", error.message);
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
        {file.length > 0 &&
          file.map((rfc, index) => (
            <object
              key={index}
              data={rfc.url}
              type="application/pdf"
              width="100%"
              height="97%"
              style={{
                marginBottom: "20px",
                marginTop: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 3)",
              }}
            >
              <p>
                Sepertinya browser anda tidak mempunyai plugin pdf, tapi tenang,
                anda bisa
                <a
                  className="text-blue-900 font-bold "
                  href={rfc.url}
                  download={rfc.url}
                >
                  {" "}
                  klik disini
                </a>{" "}
                untuk mendownload file PDF-nya
              </p>
            </object>
          ))}
      </div>
    </div>
  );
}

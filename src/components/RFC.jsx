import "../css/RFC.css";
import { rfcData } from "../data/datas";

export default function RFC() {
  return (
    <div className="container rfc-container">
      <div className="title-rfc">
        <h3>Dokumen RFC2350 Waskita-CSIRT.</h3>
      </div>
      <div className="pdf-rfc">
        {rfcData.map((items, index) => (
          <object
            key={index}
            data={items.pdfRFC}
            type="application/pdf"
            width="100%"
            height="95%"
            style={{ marginBottom: "20px", marginTop: "20px", backgroundColor: "grey"}}
          >
            <p>
              Sepertinya browser anda tidak mempunyai plugin pdf, tapi tenang,
              anda bisa
              <a
                className="text-blue-900 font-bold "
                href={items.pdfRFC}
                download={items.pdfRFC}
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

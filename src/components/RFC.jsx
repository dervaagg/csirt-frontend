import "../css/RFC.css";
import { rfcData } from "../data/datas";

export default function RFC() {
  return (
    <div className="container rfc-container">
      <div className="title-rfc mt-3">
        <button className="bg-transparent blur-0 rounded-md ml-10 text-3xl text-black animate-pulse hover:animate-none leading-loose">
          Dokumen <br /> RFC2350 <br /> WASKITA-CSIRT.
        </button>
        <img
          className="mt-10 w-80"
          src="../src/assets/reading-book.png"
          alt=""
        />
      </div>{" "}
      {/* Add your image below the title */}
      <div className="pdf-rfc">
        {rfcData.map((items, index) => (
          <object
            key={index}
            data={items.pdfRFC}
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

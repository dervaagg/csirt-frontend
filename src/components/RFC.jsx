import '../css/RFC.css'
import { rfcData } from "../data/datas"

export default function RFC() {
  return (
    <div className="container rfc-container">
        <div className="title-rfc">
            <h3>Berikut merupakan dokumen RFC 2350 yang berisi informasi dasar mengenai Waskita-CSIRT.</h3>
        </div>
        <div className="pdf-rfc">
            {
                rfcData.map((items, index)=>(
                    <object key={index} data={items.pdfRFC} type="application/pdf" width="100%" height="100%">
                        <p>It appears you don`t have a PDF plugin for this browser. No biggie... you can 
                        <a href={items.pdfRFC}>click here to download the PDF file.</a></p>
                    </object>
                ))
            }
        </div>
    </div>
  )
}

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
                        <p>Sepertinya browser anda tidak mempunyai plugin pdf, tapi tenang, anda bisa 
                        <a className="text-white" href={items.pdfRFC} download={items.pdfRFC}> klik disini</a> untuk mendownload file PDF-nya</p>
                    </object>
                ))
            }
        </div>
    </div>
  )
}

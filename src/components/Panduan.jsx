import { useState } from 'react'
import { PanduanData } from "../data/datas"


export default function Panduan() {

    const [selectedPdf, setSelectedPdf] = useState(null);

    return (
        <div className="container panduan-container">
            <div className="sidebar">
                {
                PanduanData.DataPanduan.map((sar, index)=>(
                    <ul key={index} className="side-list" style={index === 0 ? {marginTop:"20px"} : {marginTop:"0"}}>
                        <li>
                          <a onClick={() => setSelectedPdf(sar.linkPdf)}>{sar.title}</a>
                        </li>
                    </ul>
                ))
                }
            </div>
            <div className="pdfbar">
              {selectedPdf ? (
                <object data={selectedPdf} type="application/pdf" width="100%" height="100%">
                  <p>It appears you don`t have a PDF plugin for this browser. No biggie... you can <a href={selectedPdf}>click here to download the PDF file.</a></p>
                </object>
              ) : (
                <p>PDF Will Show Here</p>
              )}
            </div>
        </div>
    )
}

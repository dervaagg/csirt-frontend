import { useState } from 'react'
import { PanduanData } from "../data/datas"
import { Link } from 'react-router-dom';

export default function Panduan() {

  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="panduan">
      <div className="dropdown">
        <div className="paste-button">
            <button className="button">Paste &nbsp; ▼</button>
            <div className="dropdown-content">
              {PanduanData.DataPanduan.map((items, index)=>(
                <ul key={index}>
                    <li>
                      <Link className="sidebar-button" onClick={() => setSelectedPdf(items.filePdf)}>{items.title}</Link>
                    </li>
                </ul>
              ))}
            </div>
        </div>
      </div>
      <div className="container panduan-container">
        <div className="sidebar">
          {PanduanData.DataPanduan.map((items, index)=>(
              <ul key={index} className="side-list" style={index === 0 ? {marginTop:"5px"} : {marginTop:"0"}}>
                  <li className={selectedPdf === (items.filePdf) ? 'active' : ''}>
                    <Link className="sidebar-button" onClick={() => setSelectedPdf(items.filePdf)}>{items.title}</Link>
                  </li>
              </ul>
          ))}
        </div>
        <div className="pdfbar">
          {selectedPdf ? (
            <object data={selectedPdf} type="application/pdf" width="100%" height="100%">
              <p>It appears you don`t have a PDF plugin for this browser. No biggie... you can 
                <li href={selectedPdf}>click here to download the PDF file.</li></p>
            </object>
          ) : (
            <p>PDF Will Show Here</p>
          )}
        </div>
      </div>
    </div>
  )
}

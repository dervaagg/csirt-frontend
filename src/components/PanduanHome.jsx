import TitleOne from "../UI/TitleOne"
import { PanduanData } from "../data/datas"
import "../css/Panduan.css"

export default function PanduanHome() {
  return (
    <div id='PanduanH'>
        <div className="container panduanH-container">
            <TitleOne titleEx={'Siber'} titleSm={'Panduan Penanganan Insiden'} 
            className={'panduanH-title'}/>      

            <div className="card-panduanH-warpper">
              {PanduanData.DataPanduan.map((sar, index) => (
                <a key={index} href={sar.linkPdf} target="_blanck" className="card-panduanH">
                  <p className="header">Panduan Insiden</p>
                    <div className="main-content">
                      <p className="heading">{sar.title}</p>
                    </div>
                    <div className="footer">CSIRT - Waskita Karya</div>
                  <p></p>
                </a>
              ))}
            </div>
        </div>
    </div>
    
  )
}

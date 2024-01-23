import TitleOne from "../UI/TitleOne"
import { PanduanData } from "../data/datas"
import { Link } from "react-router-dom"
import "../css/Panduan.css"

export default function PanduanHome() {
  return (
    <div id='PanduanH'>
        <div className="container panduanH-container">
            <TitleOne titleEx={'Siber'} titleSm={'Panduan Penanganan Insiden'} 
            className={'panduanH-title'}/>      

            <div className="card-panduanH-warpper">
              {PanduanData.DataPanduan.map(( items, index) => (
                <Link key={index} to={ items.linkPdf} target="_blank" className="card-panduanH">
                  <p className="header">Panduan Insiden</p>
                    <div className="main-content">
                      <p className="heading">{ items.title}</p>
                    </div>
                    <div className="footer">CSIRT - Waskita Karya</div>
                  <p></p>
                </Link>
              ))}
            </div>
        </div>
    </div>
    
  )
}

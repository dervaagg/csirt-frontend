import TitleOne from "../UI/TitleOne"
import { PanduanData } from "../data/datas"
import "../css/PanduanHome.css"

export default function PanduanHome() {
  return (
    <div id='Panduan'>
        <div className="container panduan-container">
            <TitleOne titleEx={'Siber'} titleSm={'Panduan Penanganan Insiden'} 
            className={'panduan-title'}/>      

            <div className="card-warpper">
            {
            PanduanData.DataPanduan.map((sar, index)=>( 
                <a key={index} href={sar.linkPdf} target="_blanck" className="card" >                    
                    <p>{sar.title}</p>
                </a>
            ))
            }
            </div>
        </div>
    </div>
    
  )
}

import TitleOne from "../UI/TitleOne"
import { PanduanData } from "../data/datas"
import "../css/Panduan.css"

export default function PanduanHome() {
  return (
    <div id='PanduanH'>
        <div className="container panduanH-container">
            <TitleOne titleEx={'Siber'} titleSm={'Panduan Penanganan Insiden'} 
            className={'panduanH-title'}/>      

            <div className="card-panduan-warpper">
            {
            PanduanData.DataPanduan.map((sar, index)=>( 
                <a key={index} href={sar.linkPdf} target="_blanck" className="card-panduan" >                    
                    <p>{sar.title}</p>
                </a>
            ))
            }
            </div>
        </div>
    </div>
    
  )
}

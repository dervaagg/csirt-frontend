import TitleOne from "../UI/TitleOne"
import { PanduanData } from "../data/datas"
import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import "../css/Panduan.css"

export default function PanduanHome() {
  return (
    <div id='PanduanH'>
        <div className="container panduanH-container">
            <TitleOne titleEx={'Siber'} titleSm={'Panduan Penanganan Insiden'} 
            className={'panduanH-title'}/>      

            <div className="card-panduanH-warpper">
              {PanduanData.DataPanduan.map(( items, index) => (
                <Link key={index} to={ items.filePdf} target="_blank" className="book">
                  <div className="book-cover">
                    <img src={items.imgPdf} alt="cover-img" />
                  </div>                    
                  <div className="book-content">                    
                    <p className="book-title">{items.title}</p>
                    <p className="book-footer">Klik untuk membaca lebih lanjut</p>
                  </div>
                </Link>
              ))}
              <Link to="/panduan" className="book">
                <div className="btn-content">
                  <span className="btn-title">Lihat Lebih Detail</span>
                  <span className="icon-arrow">
                    <IoIosArrowForward />
                  </span> 
                </div>
              </Link>
            </div>
        </div>
    </div>
    
  )
}

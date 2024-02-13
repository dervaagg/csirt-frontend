import TitleOne from "../UI/TitleOne"
import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import "../css/Panduan.css"
import axios from "axios";
import { useEffect, useState } from "react"; 

export default function PanduanHome() {
const [panduan, setPanduan] = useState([])

  useEffect(() => {
    const fetchPanduan = async () => {
      try {
        const response = await axios.get("http://localhost:4001/panduan");
        setPanduan(response.data);
      } catch (error) {
        console.error("Error fetching news services:", error);
      }
    };

    const refreshInterval = setInterval(() => {
      fetchPanduan();
    }, 1000);
    fetchPanduan();

    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <div id='PanduanH'>
        <div className="container panduanH-container">
            <TitleOne titleEx={'Siber'} titleSm={'Panduan Penanganan Insiden'} 
            className={'panduanH-title'}/>      

            <div className="card-panduanH-warpper">
              {panduan.map(( panduan, index) => (
                <Link key={index} to={ panduan.url} target="_blank" className="book">
                  <div className="book-cover">
                    <img src={panduan.urlCover} alt="cover-img" />
                  </div>                    
                  <div className="book-content">                    
                    <p className="book-title">{panduan.title}</p>
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

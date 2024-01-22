import { layananData } from "../data/datas"
import "../css/Layanan.css"

//import image
import utamaImg from '../assets/layanan_01.svg'
import tambahanImg from '../assets/layanan_02.svg'

export default function Layanan() {
  return (
    <div className="container container-layanan">
      <div className="layanan-utama">
        <div className="layanan-utama-right">
          <img src={utamaImg} alt="" />
        </div>
        <div className="layanan-utama-left">          
          <div className="title-layanan">
            <h4>Layanan Utama :</h4>
          </div>
          {layananData.LayananUtama.map((sar, index)=>(
              <ul key={index}>
                <li>{sar.id + ". " + sar.layanan}</li>
              </ul>
            ))}
        </div>
      </div>
      <div className="layanan-tambahan">
        <div className="layanan-tambahan-right">          
          <div className="title-layanan">
              <h4>Layanan Tambahan</h4>
          </div>
            {layananData.LayananTambahan.map((sar, index)=>(
                <ul key={index}>
                  <li>{sar.id + ". " + sar.layanan}</li>
                </ul>
              ))}
        </div>
        <div className="layanan-tambahan-left">
          <img src={tambahanImg} alt="" />
        </div>
      </div>
    </div>
  )
}

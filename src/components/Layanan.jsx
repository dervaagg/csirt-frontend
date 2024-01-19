import { layananData } from "../data/datas"
import "../css/Layanan.css"

export default function Layanan() {
  return (
    <div className="container container-layanan">
      <div className="layanan-utama">
        <div className="title-layanan">
          <h4>Layanan Utama</h4>
        </div>
        {
          layananData.LayananUtama.map((sar, index)=>(
            <ul key={index}>
              <li>{sar.id + ". " + sar.layanan}</li>
            </ul>
          ))
        }
      </div>
      <div className="layanan-tambahan">
        <div className="title-layanan">
            <h4>Layanan Tambahan</h4>
        </div>
          {
            layananData.LayananTambahan.map((sar, index)=>(
              <ul key={index}>
                <li>{sar.id + ". " + sar.layanan}</li>
              </ul>
            ))
          }
      </div>
    </div>
  )
}

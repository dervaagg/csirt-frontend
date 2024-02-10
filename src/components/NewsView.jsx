import { NewsViewData } from "../data/datas"
import { useParams } from 'react-router-dom';
import '../css/NewsViewer.css'

export default function NewsView() {

  const { id } = useParams();
  const items = NewsViewData.find((items) => items.id === Number(id));

  return (
    <div className="container-newsview">
      <div className="container header-news">
          <img src={items.newsImage} alt="" />                  
          <div className="title">
              <h3>{items.title}</h3>
              <small>{items.category}</small>                                                   
          </div>    
      </div>
      <div className="container content-news">
        <div className="container-sumber">
          <p><a href={items.linkSumber}>Sumber Ditulis Oleh {items.namaPenulis}</a></p>
          <p>Tanggal {items.tanggalUpload}</p>
        </div>
        <div className="text">                            
            <p className='sub-title'>{items.sub_title1}</p>
            <p>{items.paragraf1}</p>
            <p className='sub-title'>{items.sub_title2}</p>
            <p>{items.paragraf2}</p>
            <p className='sub-title'>{items.sub_title3}</p>
            <p>{items.paragraf3}</p>
        </div>
      </div>
    </div>
  )
}

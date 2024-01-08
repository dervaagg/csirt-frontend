import './NewsViewer.css'
import { NewsViewData } from '../../data/datas'

export default function NewsV1() {
  return (
    <div>
        <section>
        {
            NewsViewData.News1.map(({newsvImage, title, category}, index)=>{
                return(
                    <div className="container header-news" key={index}>
                        <img src={newsvImage} alt="" />                  
                        <div className="title">
                            <h3>{title}</h3>
                            <small>{category}</small>                                                   
                        </div>    
                    </div>
                )
            })
        }
        </section>
        <section>
        {
            NewsViewData.News1.map(({paragraf1, paragraf2, paragraf3}, index)=>{
                return(
                    <div className="container content-news" key={index}>                                    
                        <div className="text">                            
                            <p>{paragraf1}</p>
                            <p>{paragraf2}</p>
                            <p>{paragraf3}</p>
                        </div>
                    </div>
                )
            })
        }   
        </section>
    </div>
  )
}

import './NewsViewer.css'
import { NewsViewData } from '../../data/datas'

export default function NewsV4() {
  return (
    <div>
        <section>
        {
            NewsViewData.News4.map(({newsvImage, title, category}, index)=>{
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
            NewsViewData.News4.map(({sub_title1, sub_title2, sub_title3, paragraf1, paragraf2, paragraf3}, index)=>{
                return(
                    <div className="container content-news" key={index}>                                    
                        <div className="text">                            
                            <p className='sub-title'>{sub_title1}</p>
                            <p>{paragraf1}</p>
                            <p className='sub-title'>{sub_title2}</p>
                            <p>{paragraf2}</p>
                            <p className='sub-title'>{sub_title3}</p>
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

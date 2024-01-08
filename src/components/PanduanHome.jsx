import TitleOne from "../UI/TitleOne"
import serviceShape from '../assets/shapes.svg'

import '../css/PanduanHome.css'

export default function PanduanHome() {
  return (
    <div className='warrper-card'>
        <div className="card">
            Click me
        </div>
        <div id='Services'>
            <div className="container services-container">
                <TitleOne titleEx={'Services'} titleSm={'Paduan Cyber Secutity'} 
                className={'services-title'}/>      

                <div className="services-articles">
                {
                ServicesData.services.map((sar, index)=>( 
                    <article key={index} className="service-article">
                        <div className="service-icon">
                        <sar.icon />
                        </div>
                        <small>{sar.proCount}</small>
                        <h5>{sar.name}</h5>
                        <p>{sar.textInfo}</p>
                    </article>
                ))
                }
                </div>       

                <div className="services-shape">
                    <img src={serviceShape} alt="" />
                </div>
            </div>
        </div>
    </div>
    
  )
}

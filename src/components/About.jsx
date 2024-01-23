import { AboutData } from "../data/datas"
import TitleOne from "../UI/TitleOne"
import '../css/About.css'

export default function About() {
  return (
    <section id="About">
      {AboutData.aboutInfo.map((items, index)=>{
          return(
            <div className="container about-container" key={index}>
              <div className="contrainer about-left">
                <img src={items.Image} alt="AboutMe" />
              </div>
              <div className="contrainer about-right">
                <div className="aboutMe-header">
                  <TitleOne title={'Tentang '} titleEx={'CSIRT'} className="about-main"/>
                  <TitleOne titleSm={'Waskita Karya'}  className="about-second"/>
                </div>
 
                <div className="aboutMe-info">
                  <p>{items.AboutMe}</p>
                </div>
                
                <div className="aboutMe-info">
                  <h5 className="about-small-title">Visi :  </h5>
                  {AboutData.visiData.map((items, index)=>{
                    return(
                      <ul key={index} >
                        <li>{items.visi}</li>
                      </ul>
                      )
                  })}
                </div>

                <div className="aboutMe-info">
                  <h5 className="about-small-title">Misi :  </h5>
                  {AboutData.misiData.map((items, index)=>{
                    return(
                      <ul key={index} >
                        <li>{items.id+". "+items.misi}</li>
                      </ul>
                      )
                  })}
                </div>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

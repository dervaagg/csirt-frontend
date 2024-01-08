import { AboutData } from "../data/datas"
import TitleOne from "../UI/TitleOne"
import '../css/About.css'

export default function About() {
  return (
    <section id="About">
      {
        AboutData.map(({Image, AboutMe, AboutContactText, CV, Email}, index)=>{
          return(
            <div className="container about-container" key={index}>
              <div className="contrainer about-left">
                <img src={Image} alt="AboutMe" />
              </div>
              <div className="contrainer about-right">

                <TitleOne titleSm={'let me intoduce myself'} title={'About '} titleEx={'Me'}/>
 
                <div className="aboutMe-info">
                  <h5 className="about-small-title">A Story of hardwork and persevence. </h5>
                  <p>{AboutMe}</p>
                </div>
                
                <div className="aboutMe-contact-info">
                  <h5 className="about-small-title">contact </h5>
                  <p>{AboutContactText}</p>
                  <a href={`mailto:${Email}`}>{Email}</a>
                </div>

                <div className="about-action-aria">
                  <a href='#Kontak' className="btn btn-danger">Contact</a>
                  <a href={CV} className="btn btn-primary">See PDF</a>
                </div>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

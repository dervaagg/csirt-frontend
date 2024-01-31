import { AboutData } from "../data/datas";
import TitleOne from "../UI/TitleOne";
import "../css/About.css";

export default function About() {
  return (
    <section id="About">
      {AboutData.aboutInfo.map((items, index) => {
        return (
          <div className="container about-container" key={index}>
            <div className="contrainer about-left">
              <img src={items.Image} alt="AboutMe" />
            </div>
            <div className="contrainer about-right">
              <div className="aboutMe-header">
                <TitleOne
                  title={"Tentang "}
                  titleEx={"CSIRT"}
                  className="about-main"
                />
              </div>
              <div className="aboutMe-info">
                <p>{items.AboutMe}</p>
              </div>
              <div className="aboutMe-info">
                <h5 className="about-small-title">VISI : </h5>
                {AboutData.visiData.map((items, index) => {
                  return (
                    <ul key={index}>
                      <br />
                      <li>{items.visi}</li>
                    </ul>
                  );
                })}
              </div>
              <div className="aboutMe-info">
                <h5 className="about-small-title">MISI : </h5>
                {AboutData.misiData.map((items, index) => {
                  return (
                    <ul key={index}>
                      <br />
                      <li>{items.id + ". " + items.misi}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

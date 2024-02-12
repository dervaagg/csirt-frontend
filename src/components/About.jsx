import TitleOne from "../UI/TitleOne";
import "../css/About.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function About() {
  const [profile, setProfile] = useState([]);
  const [vission, setVission] = useState([]);
  const [mission, setMission] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:4001/profiles");
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile  services:", error);
      }
    };

    const fetchVission = async () => {
      try {
        const response = await axios.get("http://localhost:4001/vissions");
        setVission(response.data);
      } catch (error) {
        console.error("Error fetching other services:", error);
      }
    };

    const fetchMission = async () => {
      try {
        const response = await axios.get("http://localhost:4001/missions");
        setMission(response.data);
      } catch (error) {
        console.error("Error fetching other services:", error);
      }
    };

    const refreshInterval = setInterval(() => {
      fetchProfile();
      fetchVission();
      fetchMission();
    }, 1000);

    fetchProfile();
    fetchVission();
    fetchMission();

    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <section id="About">
      {profile.map((profile, index) => {
        return (
          <div className="container about-container" key={index}>
            <div className="contrainer about-left ml-20">
              <img
                src={profile.url}
                alt="AboutMe"
                style={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 3)",
                }}
              />
            </div>
            <div className="contrainer about-right">
              <div className="aboutMe-header text-3xl font-bold">
                <TitleOne
                  title={profile.first_name}
                  titleEx={profile.last_name}
                  className="about-main"
                />
              </div>
              <div className="aboutMe-info">
                <p className="tracking-wide text-lg leading-7 mb-4">
                  {profile.about}
                </p>
              </div>
              <div className="aboutMe-info">
                <h5 className="about-small-title font-extrabold tracking-wide text-xl mb-4">
                  VISI :{" "}
                </h5>
                {vission.map((vission, index) => {
                  return (
                    <ul className="capitalize" key={vission.id}>
                      <li className="text-lg tracking-wide leading-loose mb-4">
                        {index + 1 + ". " + vission.vission}
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="aboutMe-info">
                <h5 className="about-small-title font-extrabold tracking-wide text-xl mb-4">
                  MISI :{" "}
                </h5>
                {mission.map((mission, index) => {
                  return (
                    <ul className="capitalize" key={mission.id}>
                      <li className="text-lg tracking-wide leading-loose">
                        {index + 1 + "." + " " + mission.mission}
                      </li>
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

import "../css/Kontak.css";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Kontak() {
  const [kontak, setKontak] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    getContact();
    const refreshInterval = setInterval(() => {
      getContact();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, [kontak]);

  const getContact = async () => {
    const response = await axios.get("http://localhost:4001/contacts");
    setKontak(response.data);
  };

  return (
    <div id="Kontak">
      <div className="container kontak-container">
        <div className="kontak-header">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.139755531461!2d106.87322392127265!3d-6.245306797922669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f30f9d47a913%3A0xd1a12a5203591f4b!2sPT%20Waskita%20Karya%20(Persero)%20Tbk!5e0!3m2!1sid!2sid!4v1704852435865!5m2!1sid!2sid"></iframe>
        </div>
        {kontak.map((kontak, index) => (
          <React.Fragment key={index}>
            <>
              <div className="kontak-title">
                <h2 className="uppercase">Hubungi Kami</h2>
              </div>
              <div className="kontak-warpper">
                <div className="kontak-left">
                  <h2 className="-mb-5 uppercase">Disclaimer</h2>
                  <br />
                  <ul>
                    <li className="leading-loose">{kontak.disclaimer}</li>
                  </ul>
                </div>
                <div className="kontak-right">
                  <div className="lokasi">
                    <FiMapPin className="icon-kontak-fi size-7" />
                    <br />
                    <p>{kontak.address}</p>
                  </div>
                  <div className="telephone">
                    <FiPhone className="icon-kontak-fi-phone size-5" />
                    <br />
                    <p>{kontak.phone}</p>
                  </div>
                  <div className="email">
                    <FiMail className="icon-kontak-fi-mail size-5" />
                    <br />
                    <p className="text-email">
                      <a
                        className="emailto"
                        href="mailto:waskita@waskita.co.id"
                      >
                        {kontak.email}
                      </a>
                    </p>
                  </div>
                  <div className="telephone">
                    <FiClock className="icon-kontak-fi size-7" />
                    <br />
                    <p>{kontak.operasional}</p>
                  </div>
                </div>
              </div>
            </>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

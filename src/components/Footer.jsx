import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import icoImg from "../assets/Logo WSKT.svg";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const [kontak, setKontak] = useState([]);

  useEffect(() => {
    getContact();
    const refreshInterval = setInterval(() => {
      getContact();
    }, 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  const getContact = async () => {
    const response = await axios.get("http://localhost:4001/contacts");
    setKontak(response.data);
  };

  const { pathname } = useLocation();
  if (pathname === "/kontak") {
    return null;
  }

  return (
    <>
      <div className="Footer">
        <div className="container footer-container">
          <div className="footer-konten">
            <div className="footer-title">
              <h4>Hubungi Kami</h4>
            </div>
            {kontak.map((kontak, index) => (
              <React.Fragment key={index}>
                <>
                  <div className="footer-kontak">
                    <div className="lokasi">
                      <FiMapPin className="icon-kontak" />
                      <br />
                      <p>{kontak.address}</p>
                    </div>
                    <div className="telephone">
                      <FiPhone className="icon-kontak" />
                      <br />
                      <p>{kontak.phone}</p>
                    </div>
                    <div className="email">
                      <FiMail className="icon-kontak" />
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
                  </div>
                </>
              </React.Fragment>
            ))}
          </div>

          <div className="footer-right">
            <h4 className="name">CSIRT</h4>
            <img src={icoImg} alt="icon" />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <small>
          Copyright &copy; 2024 <span>CSIRT Waskita Karya </span> | All Rights
          Reserved.
        </small>
      </div>
    </>
  );
}

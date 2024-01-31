import {
    FiPhone,
    FiMail,
    FiMapPin,
  } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export default function Footer() {
    const { pathname } = useLocation();
    if (pathname === "/kontak") return null;
    return (
        <>
        <div className="Footer">
            <div className="container footer-container">
                <div className="footer-konten">
                    <div className="footer-title">
                        <h4>Kontak Kami</h4>                
                    </div>
                    <div className="footer-kontak">                    
                        <div className="telephone">
                            <FiPhone className="icon-kontak" />
                            <br />
                            <p>(021)8508510/20 ext 247</p>
                        </div>
                        <div className="lokasi">
                            <FiMapPin className="icon-kontak" />
                            <br />
                            <p>
                                Waskita Heritage, MT Haryono Kav. 10
                                Cawang, Jakarta 13340
                            </p>
                        </div>
                        <div className="email">
                            <FiMail className="icon-kontak" />
                            <br />
                            <p className="text-email">
                                <a className="emailto" href="mailto:waskita@waskita.co.id">
                                csirt@waskita.co.id
                                </a>
                            </p>
                        </div>
                    </div>
                </div>                
            </div>            
        </div>
        <div className="footer-copyright">                       
            <small>Waskita Karya © 2024</small>
        </div>
        </>
    )
}

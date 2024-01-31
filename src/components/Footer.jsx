import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

export default function Footer() {
    const { pathname } = useLocation();
    if (pathname === "/kontak") return null;
    return (
        <div className="Footer">
            <div className="container footer-container">
                <div className="footer-konten">
                    <div className="footer-title">
                        <h4>Kontak Kami</h4>                
                    </div>
                    <div className="footer-kontak">                    
                        <div className="telephone">
                            <BsFillTelephoneFill className="icon-kontak" />
                            <p>(021)8508510/ <br />
                            20 ext 247</p>
                        </div>
                        <div className="lokasi">
                            <MdLocationOn className="icon-kontak" />
                            <p>Waskita Heritage
                            MT Haryono Kav. 10
                            Cawang, Jakarta 13340</p>
                        </div>
                        <div className="email">
                            <MdEmail className="icon-kontak" />
                            <p><a href="mailto:waskita@waskita.co.id">csirt@waskita.co.id</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

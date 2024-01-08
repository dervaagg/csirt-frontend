import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";


export default function Footer() {
  return (
    <div className="Footer">
        <div className="container footer-container">
            <div className="footer-left">
            <h4>Contact</h4>                
                <div className="kontak">                    
                    <div className="lokasi">
                        <MdLocationOn className="icon-kontak" />
                        <p>Waskita Heritage<br />
                        MT Haryono Kav. 10<br />
                        Cawang, Jakarta 13340</p>
                    </div>
                    <div className="telephone">
                        <BsFillTelephoneFill className="icon-kontak" />
                        <p>(021) 850-8510<br />
                        (021) 850-8520</p>
                    </div>
                    <div className="email">
                        <MdEmail className="icon-kontak" />
                        <p><a href="mailto:waskita@waskita.co.id">waskita@waskita.co.id</a></p>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="social">
                    <a href="https://www.facebook.com/PTWASKITAKARYA/" target="_blanck"><FaFacebook /></a>
                    <a href="https://twitter.com/waskita_karya" target="_blanck"><FaTwitter /></a>
                    <a href="https://www.instagram.com/waskita_karya/" target="_blanck"><FaInstagram /></a>
                    <a href="https://www.youtube.com/channel/UCQX2Dvr2x-bzkV1MlijknSg" target="_blanck"><FaYoutube /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

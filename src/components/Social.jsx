import { FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import '../css/Social.css'
export default function Social() {
  return (
    <div className="card">
        <a className="socialContainer containerOne" href="https://www.instagram.com/waskita_karya/" target="_blanck">
            <FaInstagram className="socialSvg instagramSvg"/>        
        </a>
  
        <a className="socialContainer containerTwo" href="https://twitter.com/waskita_karya" target="_blanck">
            <FaTwitter className="socialSvg twitterSvg"/>            
        </a>
    
        <a className="socialContainer containerThree" href="https://www.facebook.com/PTWASKITAKARYA/" target="_blanck">
            <FaFacebookF className="socialSvg linkdinSvg" />            
        </a>
  
        <a className="socialContainer containerFour" href="https://www.youtube.com/channel/UCQX2Dvr2x-bzkV1MlijknSg" target="_blanck">
            <FaYoutube className="socialSvg whatsappSvg" />            
        </a>

        <a className="socialContainer containerFive" href="https://www.tiktok.com/@waskita_karya?is_from_webapp=1&sender_device=pc" target="_blanck">
            <FaTiktok className="socialSvg whatsappSvg"/>            
        </a>
        
        <a className="socialContainer containerSix" href="https://www.linkedin.com/company/waskitakarya/" target="_blanck">
            <FaLinkedin className="socialSvg linkdinSvg" />
        </a>
    </div>             
  )
}
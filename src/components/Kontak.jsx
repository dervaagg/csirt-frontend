import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import '../css/Kontak.css'

export default function Kontak() {
  return (
    <div id='Kontak'>
        <div className="container kontak-container">
            <div className="kontak-header">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.139755531461!2d106.87322392127265!3d-6.245306797922669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f30f9d47a913%3A0xd1a12a5203591f4b!2sPT%20Waskita%20Karya%20(Persero)%20Tbk!5e0!3m2!1sid!2sid!4v1704852435865!5m2!1sid!2sid"></iframe>
            </div>
            <div className="kontak-title">
                <h2>Hubungi Kami</h2>
            </div>
            <div className="kontak-warpper">
                <div className="kontak-right">                    
                    <div className="lokasi">
                        <MdLocationOn className="icon-kontak" />
                        <p>Alamat    : </p>
                        <p>Waskita Heritage, 
                        MT Haryono Kav. 10<br />
                        Cawang, Jakarta 13340</p>
                    </div>
                    <div className="telephone">
                        <BsFillTelephoneFill className="icon-kontak" />
                        <p>Telephone  : </p>
                        <p> (021)8508510/20 ext 247</p>
                    </div>
                    <div className="email">
                        <MdEmail className="icon-kontak" />
                        <p>Email      : </p>
                        <p className="text-email"><a href="mailto:waskita@waskita.co.id">csirt@waskita.co.id</a></p>
                    </div>
                    <div className="telephone">
                        <BsFillTelephoneFill className="icon-kontak" />
                        <p>Jam Operasional Pada hari kerja, Senin s.d Jumat, <br />
                        Pukul 08.00 s/d 17.00 WIB</p>
                    </div>
                </div>
                <div className="kontak-left">
                    <h2>Disclaimer :</h2>
                    <ul>
                        <li>Bagi konstituen, sampai saat ini WASKITA-CSIRT hanya merespon dan menangani
                            insiden keamanan siber yang terjadi pada perangkat kerja yang bersifat dinas.</li>
                        <li>Terkait penanganan jenis malware tergantung dari ketersediaan dan kehandalan tools
                            yang dimiliki WASKITA.</li>
                        <li>Apabila dibutuhkan, segala konsekuensi hukum yang disebabkan oleh insiden
                            keamanan siber akan diteruskan ke institusi penegak hukum sesuai dengan
                            peraturan perundang – undangan yang berlaku.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

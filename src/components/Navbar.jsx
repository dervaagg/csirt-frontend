import { useState } from "react";
import { Link } from "react-router-dom"
import icoImg from "../assets/Th.png"

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav>
            <div className='container nav-container'>
                <Link to='/' className='navbar-logo' onClick={handleClick}><img src={icoImg} alt="icon" /></Link>
                <ul className={click ? 'nav-links active' : 'nav-links'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/rfc' onClick={closeMobileMenu}>RFC</Link>
                    </li>                    
                    <li className='nav-item'>
                        <Link to='/layanan' onClick={closeMobileMenu}>Layanan</Link>
                    </li>                    
                    <li className='nav-item'>
                        <Link to='/panduan' onClick={closeMobileMenu}>Panduan</Link>
                    </li>                    
                    <li className='nav-item'>
                        <Link to='/kontak' onClick={closeMobileMenu}>Kontak</Link>
                    </li>                    
                </ul>
                <h4 className='name'>
                    CSIRT <br />
                    <span>WSKT</span>
                </h4>
            </div>
        </nav>
        </>
    )
}

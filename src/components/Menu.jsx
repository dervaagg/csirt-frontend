import { useState } from 'react'
import { CiHome } from 'react-icons/ci'
import { RiCustomerService2Fill, RiGuideFill  } from 'react-icons/ri'
import { IoMdPerson } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrContact } from 'react-icons/gr'
import { Link } from 'react-router-dom'

export default function Menu() {

  const [active, setActitive] = useState('/')

  return (
    <div className='menus'>
      
      <li><Link to="/" onClick={()=> setActitive('/')} className={active === "/" ? 'active' : ''}><CiHome /></Link></li>
      
      <li><Link to="/about" onClick={()=> setActitive('about')} className={active === "about" ? 'active' : ''}><IoMdPerson /></Link></li>
      
      <li><Link to="/rfc" onClick={()=> setActitive('rfc')} className={active === "rfc" ? 'active' : ''}><IoDocumentTextOutline /></Link></li>
      
      <li><Link to="/layanan" onClick={()=> setActitive('layanan')} className={active === "layanan" ? 'active' : ''}><RiCustomerService2Fill /></Link></li>

      <li><Link to="/panduan" onClick={()=> setActitive('panduan')} className={active === "panduan" ? 'active' : ''}><RiGuideFill /></Link></li>
      
      <li><Link to="/kontak" onClick={()=> setActitive('kontak')} className={active === "kontak" ? 'active' : ''}><GrContact /></Link></li>

    </div>
  )
}
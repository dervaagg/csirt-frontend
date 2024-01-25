import { useState } from 'react'
import { CiHome, CiUser } from 'react-icons/ci'
import { RiServiceLine } from 'react-icons/ri'
import { GoProjectSymlink } from 'react-icons/go'
import { GrContact } from 'react-icons/gr'
import { Link } from 'react-router-dom'

export default function Menu() {

  const [active, setActitive] = useState('/')

  return (
    <div className='menus'>
      
      <li><Link to="/" onClick={()=> setActitive('/')} className={active === "/" ? 'active' : ''}><CiHome /></Link></li>
      
      <li><Link to="/about" onClick={()=> setActitive('about')} className={active === "about" ? 'active' : ''}><CiUser /></Link></li>
      
      <li><Link to="/rfc" onClick={()=> setActitive('rfc')} className={active === "rfc" ? 'active' : ''}><RiServiceLine /></Link></li>
      
      <li><Link to="/layanan" onClick={()=> setActitive('layanan')} className={active === "layanan" ? 'active' : ''}><GoProjectSymlink /></Link></li>

      <li><Link to="/panduan" onClick={()=> setActitive('panduan')} className={active === "panduan" ? 'active' : ''}><GrContact /></Link></li>
      
      <li><Link to="/kontak" onClick={()=> setActitive('kontak')} className={active === "kontak" ? 'active' : ''}><GrContact /></Link></li>

    </div>
  )
}
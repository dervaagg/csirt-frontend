import { useState } from 'react'
import { CiHome, CiUser } from 'react-icons/ci'
import { RiServiceLine } from 'react-icons/ri'
import { GoProjectSymlink } from 'react-icons/go'
import { GrContact } from 'react-icons/gr'

export default function Menu() {

  const [active, setActitive] = useState('/')

  return (
    <div className='menus'>
      
      <li><a href="/" onClick={()=> setActitive('/')} className={active === "/" ? 'active' : ''}><CiHome /></a></li>
      
      <li><a href="/" onClick={()=> setActitive('about')} className={active === "/" ? 'active' : ''}><CiUser /></a></li>
      
      <li><a href="/" onClick={()=> setActitive('rfc')} className={active === "/" ? 'active' : ''}><RiServiceLine /></a></li>
      
      <li><a href="/" onClick={()=> setActitive('layanan')} className={active === "/" ? 'active' : ''}><GoProjectSymlink /></a></li>

      <li><a href="/" onClick={()=> setActitive('panduan')} className={active === "/" ? 'active' : ''}><GrContact /></a></li>
      
      <li><a href="/" onClick={()=> setActitive('kontak')} className={active === "/" ? 'active' : ''}><GrContact /></a></li>

    </div>
  )
}
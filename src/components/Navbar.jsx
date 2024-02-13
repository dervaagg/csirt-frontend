import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import icoImg from "../assets/Logo WSKT.svg";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav>
        <div className="container nav-container">
          <NavLink to="/" className="navbar-logo" onClick={handleClick}>
            <img src={icoImg} alt="icon" />
          </NavLink>
          <ul className="nav-links">
            <motion.li 
              layoutId="nav-item"
              transition={{ type: "spring", duration:  0.5 }}
              className={`nav-item ${click === "/" ? "active" : ""}`}
            >
              <NavLink to="/" className="nav-NavLinks" onClick={closeMobileMenu}>
                BERANDA
              </NavLink>
            </motion.li>
            <motion.li
              layoutId="nav-item"
              transition={{ type: "spring", duration:  0.5 }}
              className={`nav-item ${click === "/" ? "active" : ""}`}
            >
              <NavLink to="/about" onClick={closeMobileMenu}>
                PROFIL
              </NavLink>
            </motion.li>
            <motion.li
              layoutId="nav-item"
              transition={{ type: "spring", duration:  0.5 }}
              className={`nav-item ${click === "/" ? "active" : ""}`}
            >
              <NavLink to="/rfc" onClick={closeMobileMenu}>
                RFC 2350
              </NavLink>
            </motion.li>
            <motion.li
              layoutId="nav-item"
              transition={{ type: "spring", duration:  0.5 }}
              className={`nav-item ${click === "/" ? "active" : ""}`}
            >
              <NavLink to="/layanan" onClick={closeMobileMenu}>
                LAYANAN
              </NavLink>
            </motion.li>
            <motion.li
              layoutId="nav-item"
              transition={{ type: "spring", duration:  0.5 }}
              className={`nav-item ${click === "/" ? "active" : ""}`}
            >
              <NavLink to="/panduan" onClick={closeMobileMenu}>
                PANDUAN
              </NavLink>
            </motion.li>
            <motion.li
              layoutId="nav-item"
              transition={{ type: "spring", duration:  0.5 }}
              className={`nav-item ${click === "/" ? "active" : ""}`}
            >
              <NavLink to="/kontak" onClick={closeMobileMenu}>
                KONTAK
              </NavLink>
            </motion.li>
          </ul>
          <h4 className="name">
            <button className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;CSIRT&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;CSIRT&nbsp;
              </span>
            </button>
          </h4>
        </div>
      </nav>
    </>
  );
}

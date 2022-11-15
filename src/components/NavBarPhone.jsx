import { NavLink } from "react-router-dom";
import "../styleComponents/NavBarPhone.css";

import { FaRegAddressCard } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";

function NavBarPhone() {
  function handleClick() {
    let bar1 = document.getElementById("bar1");
    let bar3 = document.getElementById("bar3");
    let menu = document.getElementById("phone__menu");

    bar1.classList.toggle("active1");
    bar3.classList.toggle("active3");
    menu.classList.toggle("active2");
  }

  return (
    <nav className="phone">

      <button className="button" onClick={handleClick}>
        <span className="button_bar Bar1" id="bar1"></span>
        <span className="button_bar Bar2"></span>
        <span className="button_bar Bar3" id="bar3"></span>
      </button>

      <ul className="phone__menu" id="phone__menu">
        <li>
          <NavLink className={({isActive}) => (isActive ? "menuButton active" : "menuButton")} to="/" onClick={handleClick}><FaHome className="icon" /> Principal</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? "menuButton active" : "menuButton")} to="/descripcion" onClick={handleClick}><FaRegAddressCard className="icon" /> Descripción</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? "menuButton active" : "menuButton")} to="/acercade" onClick={handleClick}><FaUserAlt className="icon" /> Acerca de</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? "menuButton active" : "menuButton")} to="/portafolio" onClick={handleClick}><FaBriefcase className="icon" /> Portafolio</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? "menuButton active" : "menuButton")} to="/contacto" onClick={handleClick}><FaEnvelopeOpen className="icon" /> Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarPhone;
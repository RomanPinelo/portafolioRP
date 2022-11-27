import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styleComponents/NavBarPc.css";

import { FaRegAddressCard, FaHome, FaUserAlt, FaBriefcase, FaAngleLeft, FaEnvelopeOpen } from "react-icons/fa";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/perspective.css';
import {followCursor} from 'tippy.js';


function NavBarPc() {

  const [isClickedPrincipal, setIsClickedPrincipal] = useState(false);
  const [isClickedDescripcion, setIsClickedDescripcion] = useState(true);
  const [isClickedAcercaDe, setIsClickedAcercaDe] = useState(true);
  const [isClickedPortafolio, setIsClickedPortafolio] = useState(true);
  const [isClickedContacto, setIsClickedContacto] = useState(true);

  function handleClickPrincipal() {
    // setIsClickedPrincipal(!isClickedPrincipal);
    setIsClickedPrincipal(false);
    setIsClickedDescripcion(true);
    setIsClickedAcercaDe(true);
    setIsClickedPortafolio(true);
    setIsClickedContacto(true);
  }

  function handleClickDescripcion() {
    setIsClickedPrincipal(true);
    setIsClickedDescripcion(false);
    setIsClickedAcercaDe(true);
    setIsClickedPortafolio(true);
    setIsClickedContacto(true);
  }

  function handleClickAcercaDe() {
    setIsClickedPrincipal(true);
    setIsClickedDescripcion(true);
    setIsClickedAcercaDe(false);
    setIsClickedPortafolio(true);
    setIsClickedContacto(true);
  }

  function handleClickPortafolio() {
    setIsClickedPrincipal(true);
    setIsClickedDescripcion(true);
    setIsClickedAcercaDe(true);
    setIsClickedPortafolio(false);
    setIsClickedContacto(true);
  }

  function handleClickContacto() {
    setIsClickedPrincipal(true);
    setIsClickedDescripcion(true);
    setIsClickedAcercaDe(true);
    setIsClickedPortafolio(true);
    setIsClickedContacto(false);
  }

  return (
    <nav className="pc">
      <ul className="pc__menu">
        <li>
          <Tippy content={<strong style={{color: '#6956af'}}>Principal</strong>} animation='perspective' followCursor={true} plugins={[followCursor]}>
            <NavLink className={({isActive}) => (isActive ? "pcMenuButton activePc" : "pcMenuButton")} onClick={handleClickPrincipal} to="/" > {isClickedPrincipal ? <FaHome className="iconPc" /> : <FaAngleLeft className="iconPc" />} </NavLink>
          </Tippy>
        </li>
        <li>
          <Tippy content="Descripción" theme="decorado" animation='perspective' followCursor={true} plugins={[followCursor]}>
            <NavLink className={({isActive}) => (isActive ? "pcMenuButton activePc" : "pcMenuButton")} onClick={handleClickDescripcion} to="/descripcion" > {isClickedDescripcion ? <FaRegAddressCard className="iconPc" /> : <FaAngleLeft className="iconPc" />} </NavLink>
          </Tippy>
        </li>
        <li>
          <Tippy content="Acerca de" theme="decorado" animation='perspective' followCursor={true} plugins={[followCursor]}>
            <NavLink className={({isActive}) => (isActive ? "pcMenuButton activePc" : "pcMenuButton")} onClick={handleClickAcercaDe} to="/acercade" > {isClickedAcercaDe ? <FaUserAlt className="iconPc" /> : <FaAngleLeft className="iconPc" />} </NavLink>
          </Tippy>
        </li>
        <li>
          <Tippy content="Portafolio" theme="decorado" animation='perspective' followCursor={true} plugins={[followCursor]}>
            <NavLink className={({isActive}) => (isActive ? "pcMenuButton activePc" : "pcMenuButton")} onClick={handleClickPortafolio} to="/portafolio" > {isClickedPortafolio ? <FaBriefcase className="iconPc" /> : <FaAngleLeft className="iconPc" />} </NavLink>
          </Tippy>
        </li>
        <li>
          <Tippy content="Contacto" theme="decorado" animation='perspective' followCursor={true} plugins={[followCursor]}>
            <NavLink className={({isActive}) => (isActive ? "pcMenuButton activePc" : "pcMenuButton")} onClick={handleClickContacto} to="/contacto" > {isClickedContacto ? <FaEnvelopeOpen className="iconPc" /> : <FaAngleLeft className="iconPc" />} </NavLink>
          </Tippy>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarPc;
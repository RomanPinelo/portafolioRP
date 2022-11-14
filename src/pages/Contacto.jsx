import "../styleComponents/Contacto.css";

import { FaPhoneSquareAlt, FaEnvelopeOpen, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

function Contacto() {
  return (
    <section className="contacto">
      <h2 className="tituloContacto">
        CONTACTO
      </h2>

      <p className="contactoDescripcion">
        ¡No seas tímido! <br />
        No dudes en ponerte en contacto conmigo. Estoy buscando empleo y proyectos
        acordes a mis conocimientos para aumentar mis competencias y desarrollarme
        en el ámbito laboral.
      </p>

      <div className="correoTelefonoContenedor">
        <div className="correoTelefonoContenedor__correo">
          <FaEnvelopeOpen className="iconoSobreTelefono"/>
          <p>Escríbeme un correo</p>
          <a className="mail" href="mailto:prof.roman.pinelo@gmail.com" target="_blank">prof.roman.pinelo@gmail.com <BiLinkExternal className="iconLink" /></a>
        </div>
        <div className="correoTelefonoContenedor__telefono">
          <FaPhoneSquareAlt className="iconoSobreTelefono" />
          <p>Llamame</p>
          <a className="telefono" href="tel:5545318907" target="_blank">55 - 45 - 31 - 89 - 07 <BiLinkExternal className="iconLink" /></a>
        </div>
      </div>

      <ul className="redes">
        <li>
          <a className="facebook redesButton" href="https://www.facebook.com/roman.pe.56/" target="_blank">
            <FaFacebookF />
          </a>
        </li>

        <li>
          <a className="linkedin redesButton" href="https://www.linkedin.com/in/romanpinelo/" target="_blank">
            <FaLinkedinIn />
          </a>
        </li>

        <li>
          <a className="whatsapp redesButton" href="https://wa.me/525545318907/?text=¡Hola!%20El%20motivo%20de%20mi%20mensaje%20es%20" target="_blank">
            <FaWhatsapp />
          </a>
        </li>

        <li>
          <a className="github redesButton" href="https://github.com/RomanPinelo" target="_blank">
            <FaGithub />
          </a>
        </li>
      </ul>

      <p className="formularioTitulo">Este formulario funciona gracias a <a className="formspreeLink" href="https://formspree.io/" target="_blank">Formspree</a></p>

      <form className="formularioContacto" action="https://formspree.io/f/myyovgjq" method="POST">
        <label for="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre" required />
        <label for="email">Correo: </label>
        <input type="email" name="email" id="email" required />
        <label for="asunto">Asunto: </label>
        <input type="text" name="asunto" id="asunto" />
        <label for="mensaje">Mensaje: </label>
        <textarea name="mensaje" id="mensaje" rows="10" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;
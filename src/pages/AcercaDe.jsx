import "../styleComponents/AcercaDe.css";
import { BiLinkExternal } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaGithubSquare, FaReact, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { TbBrandJavascript, TbApi } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import { DiResponsive } from "react-icons/di";
import { VscJson } from "react-icons/vsc";

import cv from "../assets/CV_Roman_Pinelo.pdf";

function AcercaDe() {
  return (
    <section className="acercade">
      <h2 className="tituloAcercaDe">
        ACERCA DE <span>MÍ</span>
      </h2>
      <p className="datosPersonales">
        <span>Nombre:</span> Roman
      </p>
      <p className="datosPersonales">
        <span>Apellido:</span> Pinelo
      </p>
      <p className="datosPersonales">
        <span>Nacionalidad:</span> Mexicano
      </p>
      <p className="datosPersonales">
        <span>Teléfono:</span>
        <a href="tel:5545318907" target="_blank" className="linkDatosPersonales">55 - 45 - 31 - 89 - 07 <BiLinkExternal className="linkExterno" /></a>
      </p>
      <p className="datosPersonales">
        <span>E-mail:</span>
        <a href="mailto:prof.roman.pinelo@gmail.com" target="_blank" className="linkDatosPersonales">prof.roman.pinelo@gmail.com <BiLinkExternal className="linkExterno" /></a>
      </p>
      <p className="datosPersonales">
        <span>Lenguajes:</span> Español (Nativo), Inglés (Leído)
      </p>

      <a href={cv} download="CV_Roman" className="descarga">Descargar CV</a>

      <h2 className="tituloSkills">SKILLS</h2>

      <ul className="skills">
        <li><FaHtml5 className="htmlLogo" /> HTML</li>
        <li><FaCss3Alt className="cssLogo" /> CSS</li>
        <li><TbBrandJavascript className="jsLogo" /> JavaScript</li>
        <li><BsBootstrapFill className="bootstrapLogo" /> Bootstrap</li>
        <li><DiResponsive /> Responsive Design</li>
        <li><FaGithubSquare /> Git & GitHub</li>
        <li><FaReact className="reactLogo" /> React JS</li>
        <li><TbApi /> Consumo de APIs</li>
        <li><VscJson className="jsonLogo" /> Manejo de archivos JSON</li>
      </ul>

      <h2 className="tituloSoftSkills">SOFT SKILLS</h2>

      <ul className="softSkills">
        <li>Adaptabilidad</li>
        <li>Amable</li>
        <li>Aprendizaje constante y autónomo</li>
        <li>Compromiso</li>
        <li>Comunicación</li>
        <li>Empatía</li>
        <li>Humildad</li>
        <li>Manejo del estrés</li>
        <li>Organización</li>
        <li>Puntualidad</li>
        <li>Responsabilidad</li>
        <li>Tolerante</li>
        <li>Trabajo en equipo</li>
      </ul>

      <h2 className="tituloExperiencia">Experiencia & Educación</h2>

      <div className="contenedorDatosExperiencia">
        <div className="contenedorDatosExperiencia__fecha">
          <span className="contenedorDatosExperiencia__fecha-logo">
            <FaBriefcase className="icon" />
          </span>
          <span className="contenedorDatosExperiencia__fecha-fecha">2021 - Presente</span>
        </div>
        <h3>Docente <span>- Universidad de Ecatepec</span></h3>
        <p>
          Funciones: Catedra de matemáticas I, II, III y IV a nivel medio superior tecnológico. 
          <br />Elaboración de planeaciones. Manejo de plataforma Moodle. 
        </p>
      </div> {/* contenedorDatosExperiencia */}

      <div className="contenedorDatosExperiencia">
        <div className="contenedorDatosExperiencia__fecha">
          <span className="contenedorDatosExperiencia__fecha-logo">
            <FaGraduationCap className="icon" />
          </span>
          <span className="contenedorDatosExperiencia__fecha-fecha">2020 - Presente</span>
        </div>
        <h3>Desarrollo de páginas web <span>- CodeBerry, Platzi, Ucamp(UTEL), YouTube y Udemy</span></h3>
        <p>
          Actualmente me encuentro estudiando temas relacionados con desarrollo web. He abarcado los 
          temas de HTML5, CSS3, Bootstrap, JavaScript, consumo de API, manejo de archivos JSON y React 
          JS. Cuento con certificados y repositorio de prácticas en GitHub. Dejo el enlace: 
          <a href="https://github.com/RomanPinelo" title="Repositorio de Roman Pinelo" target="_blank"><strong>Repositorio
            de Roman Pinelo</strong><BiLinkExternal className="logoLinkExterno" /></a>.
        </p>
      </div> {/* contenedorDatosExperiencia */}

      <div className="contenedorDatosExperiencia">
        <div className="contenedorDatosExperiencia__fecha">
          <span className="contenedorDatosExperiencia__fecha-logo">
            <FaBriefcase className="icon" />
          </span>
          <span className="contenedorDatosExperiencia__fecha-fecha">2015 - 2020</span>
        </div>
        <h3>Docente <span>- Grupo CEDVA</span></h3>
        <p>
          Funciones: Catedra de matemáticas I, II, III y IV a nivel medio superior tecnológico 
          DGETI. Matemáticas 5º y 6° año de preparatoria incorporada a la UNAM en Área I y II. 
          Electrónica y programación de microcontroladores PIC y Arduino en Ingeniería.
        </p>
      </div> {/* contenedorDatosExperiencia */}

      <div className="contenedorDatosExperiencia">
        <div className="contenedorDatosExperiencia__fecha">
          <span className="contenedorDatosExperiencia__fecha-logo">
            <FaBriefcase className="icon" />
          </span>
          <span className="contenedorDatosExperiencia__fecha-fecha">2013 - 2014</span>
        </div>
        <h3>Ingeniero de Servicio <span>- TTEMSA</span></h3>
        <p>
          Funciones: Revisión, calibración y servicio de mantenimiento a equipos de control de
          tensión marca MAGPOWR, sistemas de alineación electro mecánicos, electro hidráulicos
          y neumo hidráulicos marca FIFE, Sistemas de carga y eliminación de estática marca
          SIMCO y sistemas de corte marca TIDLAND. Ir a empresas papeleras y pañaleras a
          calibrar dichos sistemas. Lectura de manuales en inglés.
        </p>
      </div> {/* contenedorDatosExperiencia */}

      <div className="contenedorDatosExperiencia">
        <div className="contenedorDatosExperiencia__fecha">
          <span className="contenedorDatosExperiencia__fecha-logo">
            <FaBriefcase className="icon" />
          </span>
          <span className="contenedorDatosExperiencia__fecha-fecha">2010 - 2011</span>
        </div>
        <h3>Servicio social <span>- Sistema de Transporte Colectivo METRO</span></h3>
        <p>
          Funciones: Elaboración de documentos, Archivar documentos, Revisión de planos de
          instalación de la red de telefonía IUSACELL.
        </p>
      </div> {/* contenedorDatosExperiencia */}

      <div className="contenedorDatosExperiencia">
        <div className="contenedorDatosExperiencia__fecha">
          <span className="contenedorDatosExperiencia__fecha-logo">
            <FaGraduationCap className="icon" />
          </span>
          <span className="contenedorDatosExperiencia__fecha-fecha">2006 - 2011</span>
        </div>
        <h3>Ingeniería en Comunicaciones y Electrónica <span>- ESIME Zacatenco IPN</span></h3>
        <p>
          Estado: Titulado
        </p>
      </div> {/* contenedorDatosExperiencia */}

      <div className="contenedorDatosExperiencia">
        <div className="contenedorDatosExperiencia__fecha">
          <span className="contenedorDatosExperiencia__fecha-logo">
            <FaGraduationCap className="icon" />
          </span>
          <span className="contenedorDatosExperiencia__fecha-fecha">2003 - 2006</span>
        </div>
        <h3>Técnico en Sistemas Digitales <span>- CECyT No. 3 "Estanislao Ramírez Ruiz" IPN</span></h3>
        <p>
        Estado: Pasante
        </p>
      </div> {/* contenedorDatosExperiencia */}
    </section>
  );
}

export default AcercaDe;
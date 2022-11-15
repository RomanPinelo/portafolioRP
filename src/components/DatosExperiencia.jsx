import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import "../styleComponents/DatosExperiencia.css";

function DatosExperiencia({ isJob, fecha, puesto, empresa, funciones, isLink, enlace, enlaceTexto }) {
  return (
    <div className="contenedorDatosExperiencia">
      <div className="contenedorDatosExperiencia__fecha">
        <span className="contenedorDatosExperiencia__fecha-logo">
          {isJob ? <FaBriefcase className="icon" /> : <FaGraduationCap className="icon" />}
        </span>
        <span className="contenedorDatosExperiencia__fecha-fecha">{fecha}</span>
      </div>
      <h3>{puesto} <span>- {empresa}</span></h3>
      <p>
        {funciones}
        {isLink ? <a href={enlace} title={`Repositorio ${enlace}`} target="_blank"><strong>{enlaceTexto}</strong><BiLinkExternal className="logoLinkExterno" /></a> : ""}.
      </p>
    </div>
  );
}

export default DatosExperiencia;
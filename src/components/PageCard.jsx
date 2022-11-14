import "../styleComponents/PageCard.css";

import { ImFileText2 } from "react-icons/im";
import { FaGraduationCap, FaRegFileCode, FaGithubSquare } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

function PageCard({ id, imagen, titulo, escuela, lenguajes, repositorio, demostracion }) {
  return (
    <div className="tarjeta">
      <img className="tarjeta__imagen" src={imagen} alt={`Imagen ${id}`} />
      <div className="tarjeta__info">
        <p className="tarjeta__info-parrafo"><ImFileText2 className="tarjeta__info-parrafoLogo" /> Proyecto: <br /> {titulo}</p>
        <p className="tarjeta__info-parrafo"><FaGraduationCap className="tarjeta__info-parrafoLogo" /> Escuela: <br /> {escuela}</p>
        <p className="tarjeta__info-parrafo"><FaRegFileCode className="tarjeta__info-parrafoLogo" /> Lenguajes: <br /> {lenguajes}</p>
        <p className="tarjeta__info-parrafo"><FaGithubSquare className="tarjeta__info-parrafoLogo" /> Repositorio: <br /> 
          <a className="tarjeta__info-parrafoEnlace" href={repositorio} target="_blank">{repositorio}</a>
        </p>
        <p className="tarjeta__info-parrafo"><BsPencilSquare className="tarjeta__info-parrafoLogo" /> Demostración: <br /> 
          <a className="tarjeta__info-parrafoEnlace" href={demostracion} target="_blank">{demostracion}</a>
        </p>
      </div>
    </div>
  );
}

export default PageCard;
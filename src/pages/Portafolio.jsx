import { useState } from "react";
import PageCard from "../components/PageCard";
import "../styleComponents/Portafolio.css";
import data from "../jsonFile/enlacesPaginas.json";

import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";

function Portafolio() {

  const [isClickedPageButton, setisClickedPageButton] = useState(true);
  const [contenedor, setContenedor] = useState(true);

  function handleClick() {
    setisClickedPageButton(!isClickedPageButton);
    setContenedor(!contenedor);
  }

  return (
    <section className="portafolio">
      <h2 className="tituloPortafolio">
        PORTAFOLIO
      </h2>

      <p className="portafolio__descripcion">
        En este portafolio muestro las páginas web más completas, es decir, las que involucran muchos 
        conceptos de HTML, CSS, JavaScript y React JS. Aparte se hicieron cerca de 220 pequeñas prácticas con
        conceptos individuales, esto en la plataforma de JS Bin. <br />
        <strong>NOTA: No todas las páginas mostradas están desarrolladas con Responsive Design.</strong>
      </p>

      <button onClick={handleClick} className="contenedorPaginasButton">Páginas {isClickedPageButton ? <GoTriangleDown className="contenedorPaginasButton__iconDown" /> : <GoTriangleUp className="contenedorPaginasButton__iconUp" />}</button>

      <div className={contenedor ? "contenedorPaginas" : "contenedorPaginas contenedorPaginasOpen"}>
        <p>Páginas reales</p>
          {data.map(item => (
            item.isReal ? <PageCard 
                            key={item.id}
                            imagen={item.imagen}
                            titulo={item.titulo}
                            escuela={item.escuela}
                            lenguajes={item.lenguajes}
                            repositorio={item.repositorio}
                            demostracion={item.demostracion}
                          /> : ""
          ))}
        <p>Prácticas</p>
        {data.map(item => (
            !item.isReal ? <PageCard 
                            key={item.id}
                            imagen={item.imagen}
                            titulo={item.titulo}
                            escuela={item.escuela}
                            lenguajes={item.lenguajes}
                            repositorio={item.repositorio}
                            demostracion={item.demostracion}
                          /> : ""
          ))}
      </div>
    </section>
  );
}

export default Portafolio;
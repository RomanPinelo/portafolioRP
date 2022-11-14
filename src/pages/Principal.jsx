import ImagePhone from "../components/ImagePhone";
import "../styleComponents/Principal.css";

import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Principal() {

  // Create Ref element.
  const texto = useRef(null);

  useEffect(() => {
    const typed = new Typed(texto.current, {
      strings: ["<p class='titulo'>¡Bienvenido!</p> <br> Te invito a echar un vistazo a mi portafolio. Está diseñado bajo el concepto Mobile First, por lo tanto, se puede ver en diferentes dispositivos. Estoy en búsqueda de una oportunidad laboral. <br><br> ¡Espero te agrade!"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 250,
      typeSpeed: 40,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: false,
      showCursor: true,
      cursorChar: "|"
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="principal">
      <ImagePhone />
      <div className="contendorMensaje">
        {/* Elements to display typing strings */}
        <span ref={texto}></span>
      </div>
    </section>
  );
}

export default Principal;
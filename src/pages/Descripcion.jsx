import "../styleComponents/Descripcion.css";

import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Descripcion() {

  // Create Ref element.
  const titulos = useRef(null);

  useEffect(() => {
    const typed = new Typed(titulos.current, {
      strings: ["Roman Pinelo.", "Ingeniero.", "Docente.", "Músico."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 500,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="descripcion">
      <h1>
        <svg id="saludo" width="107" height="33" viewBox="0 0 107 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.09198 6.40798C5.14798 6.40798 6.01198 6.73198 6.68398 7.37998C7.37998 8.00398 7.72798 8.78398 7.72798 9.71999C7.72798 10.68 7.37998 11.484 6.68398 12.132C6.01198 12.78 5.14798 13.104 4.09198 13.104C3.01198 13.104 2.12398 12.78 1.42798 12.132C0.755983 11.484 0.419983 10.68 0.419983 9.71999C0.419983 8.78398 0.755983 8.00398 1.42798 7.37998C2.12398 6.73198 3.01198 6.40798 4.09198 6.40798ZM1.39198 15.624H6.61198L7.33198 32.868H0.671983L1.39198 15.624Z" stroke="white"/>
          <path d="M35.2176 1.72798V27H29.0616V16.596H19.4856V27H13.3296V1.72798H19.4856V11.628H29.0616V1.72798H35.2176Z" stroke="white"/>
          <path d="M48.8057 27.288C46.8377 27.288 45.0617 26.868 43.4777 26.028C41.9177 25.188 40.6817 23.988 39.7697 22.428C38.8817 20.868 38.4377 19.044 38.4377 16.956C38.4377 14.892 38.8937 13.08 39.8057 11.52C40.7177 9.93599 41.9657 8.72398 43.5497 7.88398C45.1337 7.04398 46.9097 6.62398 48.8777 6.62398C50.8457 6.62398 52.6217 7.04398 54.2057 7.88398C55.7897 8.72398 57.0377 9.93599 57.9497 11.52C58.8617 13.08 59.3177 14.892 59.3177 16.956C59.3177 19.02 58.8497 20.844 57.9137 22.428C57.0017 23.988 55.7417 25.188 54.1337 26.028C52.5497 26.868 50.7737 27.288 48.8057 27.288ZM48.8057 21.96C49.9817 21.96 50.9777 21.528 51.7937 20.664C52.6337 19.8 53.0537 18.564 53.0537 16.956C53.0537 15.348 52.6457 14.112 51.8297 13.248C51.0377 12.384 50.0537 11.952 48.8777 11.952C47.6777 11.952 46.6817 12.384 45.8897 13.248C45.0977 14.088 44.7017 15.324 44.7017 16.956C44.7017 18.564 45.0857 19.8 45.8537 20.664C46.6457 21.528 47.6297 21.96 48.8057 21.96Z" stroke="white"/>
          <path d="M68.7395 0.359985V27H62.5835V0.359985H68.7395Z" stroke="white"/>
          <path d="M71.9767 16.92C71.9767 14.856 72.3607 13.044 73.1287 11.484C73.9207 9.92399 74.9887 8.72398 76.3327 7.88398C77.6767 7.04398 79.1767 6.62398 80.8327 6.62398C82.2487 6.62398 83.4847 6.91198 84.5407 7.48798C85.6207 8.06399 86.4487 8.81998 87.0247 9.75598V6.91198H93.1807V27H87.0247V24.156C86.4247 25.092 85.5847 25.848 84.5047 26.424C83.4487 27 82.2127 27.288 80.7967 27.288C79.1647 27.288 77.6767 26.868 76.3327 26.028C74.9887 25.164 73.9207 23.952 73.1287 22.392C72.3607 20.808 71.9767 18.984 71.9767 16.92ZM87.0247 16.956C87.0247 15.42 86.5927 14.208 85.7287 13.32C84.8887 12.432 83.8567 11.988 82.6327 11.988C81.4087 11.988 80.3647 12.432 79.5007 13.32C78.6607 14.184 78.2407 15.384 78.2407 16.92C78.2407 18.456 78.6607 19.68 79.5007 20.592C80.3647 21.48 81.4087 21.924 82.6327 21.924C83.8567 21.924 84.8887 21.48 85.7287 20.592C86.5927 19.704 87.0247 18.492 87.0247 16.956Z" stroke="white"/>
          <path d="M105.734 0.827984L105.014 18.072H99.7943L99.0743 0.827984H105.734ZM102.494 27.288C101.414 27.288 100.526 26.976 99.8303 26.352C99.1583 25.704 98.8223 24.912 98.8223 23.976C98.8223 23.016 99.1583 22.212 99.8303 21.564C100.526 20.916 101.414 20.592 102.494 20.592C103.55 20.592 104.414 20.916 105.086 21.564C105.782 22.212 106.13 23.016 106.13 23.976C106.13 24.912 105.782 25.704 105.086 26.352C104.414 26.976 103.55 27.288 102.494 27.288Z" stroke="white"/>
        </svg>
      </h1>

      <p className="titulos">
        Soy <span className="titulos__texto" ref={titulos}></span>
      </p>

      <p className="descripcion__texto">
        Puedo decir que, como todos, al no saber algún tema, me pongo a investigar, leer, 
        ver videotutoriales y/o preguntar.
        <br />
        <br />
        Me gusta todo lo relacionado con las emociones fuertes como por ejemplo saltar en
        bungee.
        <br />
        <br />
        Una de las cosas que me gusta muchísimo es la música. Me encantan casi todos los
        géneros musicales, especialmente el rock en español e inglés. También soy músico y
        toco la batería. Duré 10 años con un grupo de covers el cual se llama Roospeeck.
        Actualmente toco en otro grupo llamado Los Abandona2. El mayor público para el que
        he tocado ha sido de aproximadamente de 3000 personas.
        <br />
        <br />
        Casi toda mi vida laboral he sido docente y otra cosa que me encanta es transmitir
        lo mejor posible mis conocimientos.
      </p>
    </section>
  );
}

export default Descripcion;
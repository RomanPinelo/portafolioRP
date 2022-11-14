import { Link } from "react-router-dom"; 
import "../styleComponents/NotFound.css";

function NotFound() {
  return (
    <section className="notFound">
      <h1>404 Not Found</h1>
      <p>Ha llegado a una página que no existe</p>
      <Link className="principalButton" to="/">Principal</Link>
    </section>
  );
}

export default NotFound;
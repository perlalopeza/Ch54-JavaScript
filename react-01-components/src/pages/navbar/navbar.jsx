import { Link } from "react-router-dom";

/* El componente link permite al usario moverse entre las diferentes "paginas" de la aplicacion pero evita recargas completas, preservanndo el estafo de la aplicación  */

const Navbar = ({ title }) => {

    return (

        <header>
            <nav>
                <h2>{title}</h2>
                <Link to="/"><ol>Main</ol></Link>
               <Link to="/products"> <ol>Products</ol> </Link>
            </nav >
        </header>
    );
}

export { Navbar };
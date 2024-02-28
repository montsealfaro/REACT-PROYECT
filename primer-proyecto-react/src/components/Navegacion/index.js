import {Link} from 'react-router-dom';

import "./Navegacion.css";

export default function Navegacion({hoja}){
    return(
        <nav className="barra navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className='text-decoration-none'>
                    <h1 className="navbar-brand" >Rick & Morty</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={hoja === "Characters" ? "nav-link active":"nav-link"} aria-current="page" id='Current' >
                           <Link to="/characters" className='text-decoration-none'> Characters</Link>
                        </li>
                        <li className={hoja === "Contact" ? "nav-link active":"nav-link"} >
                            <Link to="/contact" className='text-decoration-none'>Contact</Link>
                        </li>
                    
                    </ul>
                </div>
            </div>
            </nav>
    )
}
import {Link} from 'react-router-dom';

import './style.css'

export default function BotonInicio({nombreBoton,pasaje}){
    return(
        <Link className="boton rounded text-decoration-none" to={pasaje}>{nombreBoton}</Link>
    )
}
import "./descripcion.css";

export default function Descripcion({status,especie,genero,origen,setHide}) {

    const ocultar=()=>{
        setHide(true)
    }
    return(
        <div className="container-info position-relative">
        <button className="btn" onClick={ocultar}>X</button>
            <ul className="datos text-white">
                <li className="list-group-item fw-bold">Character Status: {status}</li>
                <li className="list-group-item fw-bold"><span className="fw-normal">Species</span>{especie}</li>
                <li className="list-group-item fw-bold"><span className="fw-normal">Origin</span>{origen}</li>
                <li className="list-group-item fw-bold "><span className="fw-normal">Gender</span>{genero}</li>
        </ul>        
        </div>

    )
}
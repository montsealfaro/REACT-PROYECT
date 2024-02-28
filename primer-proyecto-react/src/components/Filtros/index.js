import { Fragment } from "react";
import Filtro from "../Filtro";
import "./filtros.css";
export default function Filtros({filterCharacter}) {

    return(
        <div>
            <Fragment className="contenedor">
         <h2 className="titulo">Filters</h2>
         <form className="containerFil d-flex justify-content-center fw-medium">
            <Filtro filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
            <Filtro filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
            <Filtro filterName="Female" title="Female" filterCharacter={filterCharacter}/>
            <Filtro filterName="Male" title="Male" filterCharacter={filterCharacter}/>
            <Filtro filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
         </form>
        </Fragment>
        </div>
        
       
    )
}
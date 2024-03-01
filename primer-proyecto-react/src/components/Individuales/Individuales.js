import { useState } from 'react';
import Descripcion from '../Descripcion';
import "./individuales.css";

export default function Individuales({infoPersonaje}) {

    let [hide,setHide]=useState(true);

    const showMore=()=>{
        setHide(false)
    }

    return(
       <div className="individuales rounded p-2 d-flex flex-row gap-3">
        <div className='targ'>
            <img src={infoPersonaje.image}/>
            <h3 className='name text-center'>{infoPersonaje.name}</h3>
            <div className="d-flex flex-row-reverse"><button className="btn fw-medium rounded" onClick={showMore}>Know More...</button></div>
            
        </div>

        {
            hide === false? <Descripcion className=".cajaDescripcion" status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name} setHide={setHide}/>:''
        }

       </div>
    )
    
}

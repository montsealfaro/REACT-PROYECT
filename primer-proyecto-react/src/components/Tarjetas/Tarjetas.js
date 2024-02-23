import Individuales from "../Individuales/Individuales";
import "./tarjetas.css";
export default function Tarjetas(){

    let personajes=[];
    const traerPersonajes=async()=>{
        
        let  info= await fetch("https://rickandmortyapi.com/api/character")
        .then((resp)=>{return resp.json()})
        .then((data)=>{ console.log(data.results);return data.results}) 
        .catch((error)=>{console.log(error)})
        console.log(info)

    personajes=info;
    console.log(personajes)
    };

    return (
        <div>
            <button onClick={traerPersonajes}>cargar personajes</button>
            { personajes.map(()=>{
                return <Individuales/>
            })
            }
        </div>
    )
}
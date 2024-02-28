import {useState,useEffect} from 'react';

import Individuales from '../Individuales/Individuales';
import Filtros from '../Filtros';

import "./tarjetas.css"

export default function Tarjetas(){
    

    let [listaPersonajes,setListaPersonajes]=useState([]);
    let [personajesCompleto,setPersonajesCompleto]=useState([])
    let [filtrosAplicados,setFiltrosAplicados]=useState([]);
    
    const traerPersonajes=async()=>{

        let info= await fetch("https://rickandmortyapi.com/api/character")
               .then((resp)=>{return resp.json()})
               .then((data)=>{ return data.results})
               .catch((error)=>{console.log(error)})
       
          console.log(info)
        

        setListaPersonajes(info)
        
        setPersonajesCompleto(info)
    };


    
    const filterCharacter=(target)=>{
        
        if(target.checked === true){
            
            setFiltrosAplicados([...filtrosAplicados,target.value])
           
        }else{
            
            setListaPersonajes(personajesCompleto)
            let filtrosNuevos=filtrosAplicados.filter((filtro)=> filtro !== target.value);
            setFiltrosAplicados(filtrosNuevos)
            
        }
    }

   
    useEffect(()=>{
        setListaPersonajes(personajesCompleto)
        console.log(filtrosAplicados)
        
        filtrosAplicados.forEach((data)=>   {
            if(data === "Dead" || data ==="Alive"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.status === data); 
                setListaPersonajes(dataFiltrada)
            }else if(data === "Female" || data ==="Male"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.gender === data);
                setListaPersonajes(dataFiltrada)
            }else if(data === "Unknown"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.origin.name === "unknown");
                setListaPersonajes(dataFiltrada)
            }
        })
        
    },[filtrosAplicados])
    

    useEffect(()=>{
        traerPersonajes()
    },[]);
    
    return(
        <section className="filtros">


            <Filtros filterCharacter={filterCharacter}/>
             
             <div className="box"> 

                    <div className="d-flex flex-wrap tarjetas">
                    { 
                    listaPersonajes.length !== 0 ?
                    listaPersonajes.map((personaje)=>{
                    return <Individuales key={personaje.id} infoPersonaje={personaje}/>
                    })
                    :
                    <div class="alert alert-success" role="alert">
                     Sorry! There are no characters width all those properties.
                    </div>
             
                 }
             </div>
            
             </div>
        </section>
    )
};

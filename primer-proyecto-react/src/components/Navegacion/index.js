import "./Navegacion.css";
export default function Navegacion({hoja}){
    return(
<<<<<<< HEAD
        <nav className="barra navbar navbar-expand-lg">
            <div className="container-fluid">
                <h1 id="text1" className="navbar-brand" >Rick & Morty</h1>
=======
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1 className="navbar-brand" >Rick & Morty</h1>
>>>>>>> a6f4877e35d67d1d1549eda0eac38a81fccb56e7
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
<<<<<<< HEAD
                        <li id="text2" className={hoja === "Characters" ? "nav-link active":"nav-link"} aria-current="page" >Characters
                        </li>
                        <li id="text3" className={hoja === "Contact" ? "nav-link active":"nav-link"} >Contact
=======
                        <li className={hoja === "Characters" ? "nav-link active":"nav-link"} aria-current="page" >Characters
                        </li>
                        <li className={hoja === "Contact" ? "nav-link active":"nav-link"} >Contact
>>>>>>> a6f4877e35d67d1d1549eda0eac38a81fccb56e7
                        </li>
                    
                    </ul>
                </div>
            </div>
            </nav>
    )
}
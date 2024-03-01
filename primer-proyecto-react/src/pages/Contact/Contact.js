import Navegacion from "../../components/Navegacion"
import "./contact.css"

export default function Contact(){
    return(
        <div>
            <Navegacion hoja="Contact"/>
            <main className="container m-5 p-5 d-flex justify-content-center">
                <div className="contenedor-info">
                <h1 className="titulo fs-2 text-center">Contact</h1>
                    <p className="sub-text fs-3 fw-medium text-center">Leave us your information so we can contact you</p>
                <form action="creo usuario en formspree y pego el link si quiero...">
                    <div className="row g-3">
                        <div className="col">
                            <label htmlFor="name" >Name</label>
                            <input type="text" className="form-control"  aria-label="First name" id="name"/>
                        </div>
                        <div className="col"  >
                            <label htmlFor="email" >Email</label>
                            <input type="email" className="form-control"  aria-label="Last name" id="email"/>
                        </div>
                    </div>
                    <div className="mb-3"  >
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="3"></textarea>
                    </div>
                    <input className="btn" id="send" type="submit" value="Send"/>
                </form>
                </div>
                
            </main>
        </div>
        
    )
}


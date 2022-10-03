import { FaEnvelope } from "react-icons/fa";

export default function Details(){
    return (
        <div className="details">
            <h1>Saira Abdulla</h1>
            <h2>Software Engineer</h2>
            <span className="website"><a href="https://www.sairaabdulla.com" className="website-link">Website</a></span>
            <a href="mailto:sairaabdullapa@gmail.com"><button className="btn"><FaEnvelope />    
                Email
            </button></a>
        </div>
    )
}
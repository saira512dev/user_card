import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


export default function About(){
    return (
        <footer>
            <a href="https://twitter.com/saira_codes" target="_blank"><FaTwitterSquare className="icon" /></a>
            <a href="https://www.linkedin.com/in/saira-abdulla/" target="_blank"><FaLinkedin className="icon" /></a>
            <a href="https://github.com/saira512dev/" target="_blank"><FaGithubSquare className="icon" /></a>
        </footer>
    )
}
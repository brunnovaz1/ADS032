import { NavLink, useNavigate } from "react-router-dom"
import '../components/navbar.css'

export default function Navbar(){
    return(
        <>
        <ul>
            <li><NavLink to='/'>Meus Contatos</NavLink></li>
            <li><NavLink to='/novo'>Novo Contato</NavLink></li>
        </ul>
        </>
    )
}

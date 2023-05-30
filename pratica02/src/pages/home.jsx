import { useContext } from "react"
import {ContatosContext} from "../contexts/ContatosContext.jsx"


export default function Home(){
    const {meusContatos} = useContext(ContatosContext)
    
    return(
        <>
     <h2>Meus Contatos</h2>  
         <ul>
                {meusContatos.map((contato, index) =>
                <li id={index}>{contato.nome} - {contato.telefone}</li>)}
        </ul>

        </>
    )
}

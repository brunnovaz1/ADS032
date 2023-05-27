import { useContext } from "react"
import ContatosContext from "../contexts/ContatosContext"
import { useContext } from "react"
export default function Home(){
    
    const meusContatos = useContext(ContatosContext)
    
    return(
        <>
            <h2>Meus Contatos</h2>
            <ul>
                {meusContatos.map((contato, key) => <li id={key}>{contato.nome} - {contato.telefone}</li>)}
            </ul>

        </>
    )
}

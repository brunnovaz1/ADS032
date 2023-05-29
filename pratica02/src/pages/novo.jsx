import { useContext } from 'react';
import {useForm} from 'react-hook-form'
import {ContatosContext} from '../contexts/ContatosContext.jsx';
import { useNavigate } from 'react-router-dom';



export default function Novo(){
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const incluirContato = useContext(ContatosContext)
    const navigate = useNavigate()

    function onSubmit(data){
        incluirContato(data),
        navigate("/")
    }
    

   
   
    return(
        <>
        <h2>Adicionar Novo Contato</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input type="text" name="nome" required />
            {errors.nome && <p>{errors.nome.message}</p>}

            <label htmlFor="telefone">Telefone</label>
            <input type="number" name="telefone" required />
            {errors.telefone && <p>{errors.telefone.message}</p>}

            <button type="submit">Enviar</button>

        </form>
        </>
    )
}

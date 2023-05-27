import { useContext } from 'react';
import {useForm} from 'react-hook-form'
import ContatosContext from '../contexts/ContatosContext';
export default function Novo(){
   
    const { register, handleSubmit, formState: { errors } } = useForm();

    const incluirContato = useContext(ContatosContext)

    function onSubmit(data){

    }

   
   
    return(
        <>
        <h2>Adicionar Novo Contato</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nome" >Nome</label>
            <input type="text" register="nome" required="Campo Obrigatório!" />
            {errors.nome && <p>{errors.nome.message}</p>}

            <label htmlFor="telefone">Telefone</label>
            <input type="number" register="telefone" required="Campo Obrigatório!" />
            {errors.telefone && <p>{errors.telefone.message}</p>}

            <button>Enviar</button>

        </form>
        </>
    )
}

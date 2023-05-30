import { useContext } from 'react';
import {useForm} from 'react-hook-form'
import {ContatosContext} from '../contexts/ContatosContext.jsx';
import { useNavigate } from 'react-router-dom';
import novo from '../pages/novo.css'


export default function Novo(){
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {incluirContato} = useContext(ContatosContext)
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
            <input type="text" {...register('nome', {required:"Campo Obrigatório"})} />
            {errors.nome && <p>{errors.nome.message}</p>}

            <label>Telefone</label>
            <input type="number" {...register('telefone', {required:"Campo Obrigatório"})} />
            {errors.telefone && <p>{errors.telefone.message}</p>}

            <button type="submit">Enviar</button>

        </form>
        </>
    )
}

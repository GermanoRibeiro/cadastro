import Header from "../../components/Header";
import React, { useContext } from 'react';
import { TarefaContext } from '../../contexts/TarefaContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { TarefaContextType } from '../../contexts/TarefaContextType';
import { Link } from 'react-router-dom';
import "./style.css";


// npm install react-hook-form yup @types/yup @hookform/resolvers

const schema = yup.object().shape({
    nome: yup.string().required('Nome inválido'),
    data: yup.date().required('Data inválida'),
    descricao: yup.string().required('Descricao inválida'),
});

interface AddTarefaForm {
    nome: string,
    data: Date,
    descricao: string

}

const AddTarefa = () => {
    const { addTarefa } = useContext<TarefaContextType>(TarefaContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: AddTarefaForm, e: any) => {
        addTarefa(data.nome, data.data, data.descricao);
        e.target.reset();
        window.location.href = '/tarefas';
    }

    return (

        <form id="page-Cadastro-form" onSubmit={handleSubmit<AddTarefaForm>(onSubmit)}>
            <div className="container">
                <Header></Header>
                <div className="row">
                    <div className="col-12">
                        <div className="mb-4 align-items-end">
                            bnvddsbf
                            {/* <Link to="/tarefas">Minhas tarefa</Link> */}
                        </div>
                    </div>
                </div>

                <h1>Cadastro dat Tarefa</h1>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-4">
                            <input type="text" name="nome" id="nome" placeholder="Nome:" className="form-control form-control-lg" ref={register} />
                            <span><small><strong className="uk-text-danger">{errors.nome?.message}</strong></small></span>
                        </div>

                    </div>

                    <div className="col-6">
                        <div className="mb-4">
                            <input type="date" name="data" id="data" placeholder="Data:" className="form-control form-control-lg" ref={register} />
                            <span><small><strong className="uk-text-danger">{errors.data?.message}</strong></small></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="mb-4">
                            <textarea name="descricao" id="descricao" placeholder="Descrição:" className="form-control form-control-lg" ref={register} />
                            <span><small><strong className="uk-text-danger">{errors.descricao?.message}</strong></small></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-4">
                        <button type="submit" className="btn btn-success">Cadastrar Tarefa</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddTarefa;
import React, { useContext } from 'react';
import ListItem from './ListItem';
import { TarefaContextType } from '../../contexts/TarefaContextType';
import { TarefaContext } from '../../contexts/TarefaContext';
import Header from "../../components/Header";

const TarefaList = () => {
    const { tarefas } = useContext<TarefaContextType>(TarefaContext);

    return (
     <div>
        <Header></Header>
        <table className="uk-table">
          
            <caption>Lista de tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    tarefas?.map(
                        tarefa => (<ListItem key={tarefa.id} tarefa={tarefa}></ListItem>)
                    )
                }
            </tbody>
        </table>
     </div>
        
    );
}

export default TarefaList;
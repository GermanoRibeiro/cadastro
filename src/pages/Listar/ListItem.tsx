import React, { useContext } from 'react';
import { Tarefa } from '../../models/Tarefa';
import { TarefaContextType } from '../../contexts/TarefaContextType';
import { TarefaContext } from '../../contexts/TarefaContext';

interface TarefaListItemProps {
    tarefa: Tarefa
}

const TarefaListItem = (props: TarefaListItemProps) => {
    const { removeTarefa, toggle } = useContext<TarefaContextType>(TarefaContext);

    const onRemove = (tarefa: Tarefa) => {
        removeTarefa(tarefa);
    }

    const handleChange = (event: any) => {
        toggle(props.tarefa);
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox"
                        type="checkbox"
                        checked={props.tarefa.done}
                        onChange={handleChange} />
                </label>
            </td>
            <td className="uk-width-expand">
                {props.tarefa.nome}
            </td>
            <td className="uk-width-expand">
                {props.tarefa.data}
            </td>
            <td className="uk-width-expand">
                {props.tarefa.descricao}
            </td>
            <td className="uk-width-auto">
                <button
                    className="uk-icon-button uk-button-danger"
                    uk-icon="trash"
                    onClick={() => onRemove(props.tarefa)}></button>
            </td>
        </tr>
    );
}

export default TarefaListItem;
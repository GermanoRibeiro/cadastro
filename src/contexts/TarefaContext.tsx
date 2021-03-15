import React, { createContext, useState, useEffect } from 'react';
import { TarefaContextType } from './TarefaContextType';
import { Tarefa } from '../models/Tarefa';
import { get, save } from '../services/TarefaService';

export const TarefaContext = createContext<TarefaContextType>({
    tarefas: [],
    addTarefa: () => { },
    removeTarefa: () => { },
    toggle: () => { },
});

const TarefaProvider = (props: any) => {
    const [tarefas, setTarefas] = useState<Tarefa[]>(get);

    useEffect(() => {
        save(tarefas);
    }, [tarefas]);

    const addTarefa = (nome: string, data: Date, descricao:string) => {
        const tarefa: Tarefa = { id: tarefas.length + 1, nome: nome, data: data, descricao:descricao,done:false };
        setTarefas([...tarefas, tarefa]);
    }

    const removeTarefa = (tarefa: Tarefa) => {
        const index = tarefas.indexOf(tarefa);
        setTarefas(tarefas.filter((_, i) => i !== index));
    }

    const toggle = (tarefa: Tarefa) => {
        const index = tarefas.indexOf(tarefa);
        tarefas[index].done = !tarefa.done;
        setTarefas([...tarefas]);
    }

    return (
        <TarefaContext.Provider value={{ tarefas, addTarefa, removeTarefa, toggle }}>
            {props.children}
        </TarefaContext.Provider>
    );
}

export default TarefaProvider;
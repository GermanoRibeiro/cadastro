import { Tarefa } from "../models/Tarefa";

const TAREFA_STORE = 'tarefas';

export const get = (): Tarefa[] => {
    const data = localStorage.getItem(TAREFA_STORE) || '';
    try {
        const result = JSON.parse(data) as Tarefa[];
        return result;
    } catch {
        return [];
    }
}

export const save = (data: Tarefa[]) => {
    if (data?.length >= 1)
        localStorage.setItem(TAREFA_STORE, JSON.stringify(data));
}
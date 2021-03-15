import { Tarefa } from "../models/Tarefa";

export interface TarefaContextType {
    tarefas: Tarefa[];
    addTarefa(nome: string, data: Date, descricao: string): void;
    removeTarefa(todo: Tarefa): void;
    toggle(todo: Tarefa): void;
}
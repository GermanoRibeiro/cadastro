export class Tarefa {
    constructor(
        public id: number,
        public nome: string,
        public data: Date,
        public descricao: string,
        public done: boolean
        ) {

    }
}
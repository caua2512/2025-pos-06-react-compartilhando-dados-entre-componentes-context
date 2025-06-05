export type Tarefa = {
    id: number;
    title: string;
    completed: boolean;
    userId: number; // Opcional, caso queira associar a um usuário
}
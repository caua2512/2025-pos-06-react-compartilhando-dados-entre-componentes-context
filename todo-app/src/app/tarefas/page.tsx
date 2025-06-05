'use client';
import { useTarefas} from '@/data/ContextTarefa';

export default function ListaTarefas() {
  const { tarefas } = useTarefas();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Lista de Tarefas</h2>
      <ul className="space-y-2">
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>{tarefa.title}</span>
            <span>{tarefa.completed ? '✅' : '❌'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
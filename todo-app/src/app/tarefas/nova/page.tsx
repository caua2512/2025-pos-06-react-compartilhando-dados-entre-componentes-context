'use client';
import { useState } from 'react';
import { useTarefas} from '@/data/ContextTarefa';

export default function NovaTarefa() {
  const { adicionarTarefa } = useTarefas();
  const [texto, setTexto] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!texto.trim()) return;
    adicionarTarefa({ id: Date.now(), todo: texto, completed: false, userId: 1 });
    setTexto('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Adicionar Nova Tarefa</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite a tarefa"
        className="border border-gray-300 p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar
      </button>
    </form>
  );
}

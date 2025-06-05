'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usaTarefa } from '@/data/ContextTarefa';

export default function NovaTarefa() {
 const { adicionarTarefa } = usaTarefa();
 const [titulo, setTitulo] = useState('');
 const router = useRouter();

 const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    adicionarTarefa({ id: Date.now(), titulo: titulo, completo: false,  usuarioId: 1 });
    setTitulo('');
    router.push('/tarefas');
  };
  return (
    <form onSubmit={handleChange} className="space-y-4">
  <h2 className="text-xl font-semibold">Adicionar Nova Tarefa</h2>
  <input
    type="text"
    value={titulo}
    onChange={(e) => setTitulo(e.target.value)}
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


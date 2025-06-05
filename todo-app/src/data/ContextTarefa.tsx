'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Tarefa } from '@/types/tarefa';

interface TipoContexto {
  tarefas: Tarefa[];
  adicionarTarefa: (tarefa: Tarefa) => void;
}

const contextoTarefa = createContext<TipoContexto | null>(null);

export const usaTarefa = () => {
  const contexto = useContext(contextoTarefa);
  if (!contexto) throw new Error('usaTarefa deve ser usado dentro do TarefaProvider');
  return contexto;
}

export const TarefaProvider = ({children}: { children: React.ReactNode }) => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((data) => setTarefas(data.todos))
            .catch((err) => console.error('Erro ao carregar tarefas:', err));
    }, []);

    const adicionarTarefa = (tarefa: Tarefa) => {
        setTarefas((prev) => [...prev, tarefa]);
    }

    return (
        <contextoTarefa.Provider value={{ tarefas, adicionarTarefa }}>
            {children}
        </contextoTarefa.Provider>
    );
}



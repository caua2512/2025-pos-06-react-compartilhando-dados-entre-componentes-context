'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

import { Tarefa } from "@/types/tarefa";

interface ContextTarefaProps {
    tarefas: Tarefa[];
    adicionarTarefa: (titulo: string) => void;
}

const ContextTarefa = createContext<ContextTarefaProps | null>(null);


export const useTarefas = () => {
    const context = useContext(ContextTarefa);
    if (!context) throw new Error("useTarefas deve ser usado dentro do TarefaProvider");
    return context;
};

export const TarefaProvider = ({ children } : { children: ReactNode  }) => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/todos")
        .then((response) => response.json())
        .then((data) => setTarefas(data.todos));
    }, []);

    const adicionarTarefa = (tarefa: Tarefa) => {
      setTarefas((prev) => [...prev, tarefa]); 
    };

    return (
        <ContextTarefa.Provider value={{ tarefas, adicionarTarefa }}>
            {children}
        </ContextTarefa.Provider>
    );
};

export default TarefaProvider;
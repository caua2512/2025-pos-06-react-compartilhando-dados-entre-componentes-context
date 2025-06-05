"use client";

import { useState } from "react";
import { usaTarefa } from "@/data/ContextTarefa";
import Cabecalho from "@/components/Cabecalho";

interface TarefaProps {
  titulo: string;
  concluido?: boolean;
}

const Tarefa: React.FC<TarefaProps> = ({ titulo, concluido }) => {
  const [estaConcluido, setEstaConcluido] = useState(concluido);

  const classeCard = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
    estaConcluido
      ? "bg-gray-800 hover:border-gray-800"
      : "bg-gray-400 hover:border-gray-400"
  }`;

  const classeCorDoTexto = estaConcluido ? "text-amber-50" : "";

  const escutarClique = () => {
    console.log(`A tarefa '${titulo}' foi clicada!`);
    setEstaConcluido(!estaConcluido);
  };

  return (
    <div className={classeCard} onClick={escutarClique}>
      <h3 className={`text-xl font-bold ${classeCorDoTexto}`}>{titulo}</h3>
      <p className={`text-sm ${classeCorDoTexto}`}>
        {estaConcluido ? "Concluída" : "Pendente"}
      </p>
    </div>
  );
};

const Tarefas: React.FC = () => {
  const { tarefas } = usaTarefa();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          titulo={tarefa.titulo}
          concluido={tarefa.completo}
        />
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <Cabecalho />
      <Tarefas />
    </div>
  );
};

export default Home;

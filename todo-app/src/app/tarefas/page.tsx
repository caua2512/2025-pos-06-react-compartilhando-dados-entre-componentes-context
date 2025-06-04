"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { TarefaInterface } from "@/data/ContextTarefa";
import Cabecalho from "@/components/Cabecalho";
import ModalTarefa from "@/components/TarefaModal";

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

interface TarefasProps {
  dados: TarefaInterface[];
}

const Tarefas: React.FC<TarefasProps> = ({ dados }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dados.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          titulo={tarefa.title}
          concluido={tarefa.completed}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const [tarefas, setTarefas] = useState<TarefaInterface[]>([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    const buscarTarefas = async () => {
      try {
        const resposta = await axios.get("https://dummyjson.com/todos");
        setTarefas(resposta.data.todos);
      } catch (erro) {
        console.error("Erro ao buscar tarefas:", erro);
      }
    };

    buscarTarefas();
  }, []);

  const adicionarTarefa = (titulo: string) => {
    const novaTarefa: TarefaInterface = {
      id: tarefas.length + 1,
      title: titulo,
      completed: false,
    };
    setTarefas((prev) => [...prev, novaTarefa]);
    setMostrarModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <Cabecalho />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setMostrarModal(true)}
      >
        Nova Tarefa
      </button>
      {mostrarModal && (
        <ModalTarefa
          aoadicionar={adicionarTarefa}
          aoFechar={() => setMostrarModal(false)}
        />
      )}
      <Tarefas dados={tarefas} />
    </div>
  );
};

export default Home;
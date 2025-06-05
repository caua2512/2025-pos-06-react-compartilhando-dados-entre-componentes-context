export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Gerenciador de Tarefas</h1>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/tarefas" className="hover:underline">Tarefas</a>
          <a href="/tarefas/nova" className="hover:underline">Nova Tarefa</a>
        </div>
      </div>
    </nav>
  );
}
import React from "react";
import { format, parseISO } from "date-fns";
import { Pencil, Trash } from "@phosphor-icons/react";

export function TaskList({ tasks, setTasks, error, handleEditClick }) {
  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "dd-MM-yyyy HH:mm ");
  };

  const sendDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/v1/tarefas/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        console.log(`Tarefa ${id} deletada com sucesso`);
      } else {
        console.error("Erro ao deletar a tarefa:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
    }
  };

  return (
    <div className="text-white mt-8 mx-auto bg-neutral-800 p-4">
      {tasks.length > 0 &&
        tasks.map((task) => (
          <div key={task.id} className="flex justify-between items-center p-4 border-b border-neutral-700">
            <div>
              <strong>ID:</strong> {task.id} <br />
              <strong>TÍTULO:</strong> {task.titulo} <br />
              <strong>DESCRIÇÃO:</strong> {task.descricao} <br />
              <strong>DATA VENCIMENTO:</strong> {formatDate(task.data_vencimento)} <br />
              <strong>STATUS:</strong> {task.status} <br />
              <strong>DATA CRIAÇÃO:</strong> {formatDate(task.criado_em)} <br />
              <strong>DATA ATUALIZAÇÃO:</strong> {formatDate(task.atualizado_em)} <br />
            </div>
            <div className="flex space-x-4">
              <button onClick={() => handleEditClick(task)}>
                <Pencil
                  size={18}
                  className="text-green-300 hover:text-green-500 transition duration-200 cursor-pointer"
                />
              </button>
              <button onClick={() => sendDelete(task.id)}>
                <Trash
                  size={18}
                  className="text-red-300 hover:text-red-500 transition duration-200 cursor-pointer"
                />
              </button>
            </div>
          </div>
        ))}
      {error && <p>{error}</p>}
    </div>
  );
}

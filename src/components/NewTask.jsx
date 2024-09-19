import { PlusCircle, MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";
import { Input } from "./Input/Input";
import { TaskTable } from "./TaskTable"; 

export function NewTask() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5001/v1/tarefas");
      const data = await response.json();
      setTasks(data);
      setError(null);
    } catch (error) {
      setError(
        "Ocorreu um erro ao buscar as tarefas. Por favor, tente novamente."
      );
    }
  };

  useEffect(() => {

  }, []); 

  return (
    <div className="flex flex-col items-center mx-auto gap-4 relative -top-7 max-w-[80%]">
      <div>
        <form>
          <div className="flex flex-col gap-2">
            <Input text={"Adicione o titulo"} />
            <Input text={"Adicione a descrição"} />
            <Input text={"Adicione a data de vencimento"} type="date" />
          </div>
        </form>
        <div className="flex justify-between gap-4 mt-4">
          <div className="flex w-[7rem] items-center justify-center gap-2 p-4 text-white bg-green-600 rounded-lg hover:bg-green-500 cursor-pointer">
            <button type="submit">Criar</button>
            <PlusCircle size={18} />
          </div>
          <div className="flex items-center gap-2 p-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 cursor-pointer">
            <button type="button" onClick={fetchData}>
              Visualizar
            </button>
            <MagnifyingGlass size={18} />
          </div>
        </div>
      </div>
      {tasks.length > 0 && <TaskTable tasks={tasks} error={error} />} 
    </div>
  );
}


import { PlusCircle, MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Input } from "./Input/Input";

export function NewTask() {
  const [task, setTask] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5001/v1/tarefas", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setPlaylists(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <div className="flex justify-center w-[46rem] mx-auto gap-2 relative -top-7">
      <div>
        <form>
          <div className="flex flex-col">
            <Input text={"Adicione o titulo"} />
            <Input text={"Adicione a descrição"} />
            <Input text={"Adicione a data de vencimento"} type="date" />
          </div>
        </form>
        <div className="flex justify-between ">
          <div className="flex w-[7rem] items-center justify-center gap-2 p-4 text-white bg-green-600 rounded-lg hover:bg-green-500 cursor-pointer">
            <button type="submit">Criar</button>
            <PlusCircle size={18} />
          </div>
          <div className="flex items-center gap-2 p-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 cursor-pointer">
            <button>Visualizar</button>
            <MagnifyingGlass size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

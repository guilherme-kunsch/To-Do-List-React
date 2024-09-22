import { PlusCircle, MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";
import { Input } from "./Input/Input";
import { TaskList } from "./TaskTable";

export function NewTask() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    data_vencimento: "",
    status: ""
  });
  const [editingTaskId, setEditingTaskId] = useState(null); 

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5001/v1/tarefas");
      const data = await response.json();
      setTasks(data);
      setError(null); 
    } catch (error) {
      setError("Ocorreu um erro ao buscar as tarefas. Por favor, tente novamente.");
    }
  };

  useEffect(() => {

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const method = editingTaskId ? "PUT" : "POST"; 
    const url = editingTaskId ? `http://localhost:5001/v1/tarefas/${editingTaskId}` : "http://localhost:5001/v1/tarefas";

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Formulário enviado com sucesso!");
        setFormData({ titulo: "", descricao: "", data_vencimento: "", status: ""}); 
        setEditingTaskId(null); 
        fetchData(); 
      } else {
        console.error("Erro ao enviar o formulário", error);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setFormData({
      titulo: task.titulo,
      descricao: task.descricao,
      data_vencimento: task.data_vencimento.split('T')[0],
      status: task.status,
    });
  };

  return (
    <div className="flex flex-col items-center mx-auto gap-4 relative -top-7 max-w-[80%]">
      <div>
        <form onSubmit={submitForm}>
          <div className="flex flex-col gap-2">
            <p className="text-white mt-10">Titulo da tarefa</p>
            <Input
              text={"Adicione o titulo"}
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
            <p className="text-white">Descrição da tarefa</p>
            <Input
              text={"Adicione a descrição"}
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
            />
            <p className="text-white">Data de vencimento</p>
            <Input
              text={"Adicione a data de vencimento"}
              type="date"
              name="data_vencimento"
              value={formData.data_vencimento}
              onChange={handleChange}
            />
            <p className="text-white">Status</p>
            <Input
              text={"Adicione um status"}
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between gap-4 mt-4">
            <div className="flex w-[7rem] items-center justify-center gap-2 p-2 text-white bg-green-600 rounded-lg hover:bg-green-500 cursor-pointer">
              <button type="submit">
                {editingTaskId ? "Atualizar" : "Criar"}
              </button>
              <PlusCircle size={18} />
            </div>
            <div className="flex items-center gap-2 p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 cursor-pointer">
              <button type="button" onClick={fetchData}>
                Visualizar
              </button>
              <MagnifyingGlass size={18} />
            </div>
          </div>
        </form>
      </div>
      {tasks.length > 0 && (
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          error={error}
          handleEditClick={handleEditClick} 
        />
      )}
    </div>
  );
}

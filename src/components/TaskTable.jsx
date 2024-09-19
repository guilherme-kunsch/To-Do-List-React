import React from "react";
import { format, parseISO } from 'date-fns';

export function TaskTable({ tasks, error }) {
  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, 'dd-MM-yyyy HH:mm ');
  };

  return (
    tasks.length > 0 && (
      <div className="text-white mt-8 mx-auto rounded-md bg-neutral-800 p-4 overflow-x-auto">
        <table
          className="w-full text-center"
          style={{
            margin: "0 auto",
            borderCollapse: "separate",
            borderSpacing: "10px",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>TÍTULO</th>
              <th>DESCRIÇÃO</th>
              <th>DATA VENCIMENTO</th>
              <th>STATUS</th>
              <th>DATA CRIAÇÃO</th>
              <th>DATA ATUALIZAÇÃO</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.titulo}</td>
                <td>{task.descricao}</td>
                <td>{formatDate(task.data_vencimento)}</td>
                <td>{task.status}</td>
                <td>{formatDate(task.criado_em)}</td>
                <td>{formatDate(task.atualizado_em)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {error && <p>{error}</p>}
      </div>
    )
  );
}

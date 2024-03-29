import { PlusCircle } from "@phosphor-icons/react";

export function NewTask({ onSubmit, newValue, setNewValue }) {
  return (
    <div>
    <form onSubmit={onSubmit} className="flex justify-center w-[46rem] mx-auto gap-2 relative -top-7">
      <input
        className="bg-neutral-800 p-4 w-[40rem] rounded-lg text-white border border-black outline-none focus:border-purple-900 focus:border border-box"
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => setNewValue(event.target.value)}
        value={newValue}
      />
      <div className="flex justify-center items-center gap-2 p-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 cursor-pointer">
        <button type="submit">Criar</button>
        <PlusCircle size={18} />
      </div>
    </form>
    </div>
  );
}

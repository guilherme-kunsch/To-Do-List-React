import { PlusCircle } from "@phosphor-icons/react";
export function ToAdd() {
  return (
    <div className="flex justify-center w-2/4 mx-auto gap-2">
      <input
        className="bg-neutral-800 p-4 w-6/12 rounded-md text-white"
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <div className="flex justify-center items-center gap-2 p-4 text-white bg-blue-600 rounded-md font-bold">
        <button className="">Criar</button>
        <PlusCircle size={20} />
      </div>
    </div>
  );
}

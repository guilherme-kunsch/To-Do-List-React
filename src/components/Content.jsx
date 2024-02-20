import { ClipboardText  } from '@phosphor-icons/react'

export function PageContent() {
  return (
    <div className="flex flex-col text-white items-center">
      <div className="flex justify-between items-center w-[46rem] my-4">
        <div className="flex gap-2">
          <p className="text-blue-400 font-bold">Tarefas criadas</p>
          <span className="flex justify-center bg-gray-700 text-white w-7 h-6 rounded-full font-bold">0</span>
        </div>
        <div className="flex gap-2">
          <p className="text-purple-500 font-bold">Concluídas</p>
          <span className="flex justify-center bg-gray-700 text-white w-7 h-6 rounded-full font-bold">0</span>
        </div>
      </div>
      <div className="flex border-t border-gray-700 p-16 text-neutral-500 items-center flex-col w-[46rem] rounded-t-lg ">
        <span>
          <ClipboardText size={56}/>
        </span>
        <p className="font-bold mt-3">Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}

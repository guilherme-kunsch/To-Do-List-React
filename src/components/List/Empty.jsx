import { ClipboardText } from '@phosphor-icons/react'

export function Empty() {
  return (
    <div className="flex mx-auto border-t border-gray-700 p-16 text-neutral-500 items-center flex-col w-[46rem] rounded-t-lg ">
      <span>
        <ClipboardText size={56} />
      </span>
      <p className="font-bold mt-3">Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

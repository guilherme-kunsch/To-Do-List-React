export function HeaderList({ countTask }) {
  return (
    <div className="flex flex-col text-white items-center">
      <div className="flex justify-between items-center w-[46rem] my-4">
        <div className="flex gap-2">
          <p className="text-blue-400 font-bold">Tarefas criadas</p>
          <span className="flex justify-center bg-gray-700 text-white w-7 h-6 rounded-full font-bold">
            {countTask}
          </span>
        </div>
        <div className="flex gap-2">
          <p className="text-purple-500 font-bold">Concluídas</p>
          <span className="flex justify-center bg-gray-700 text-white w-7 h-6 rounded-full font-bold">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

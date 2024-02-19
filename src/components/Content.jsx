export function PageContent() {
  return (
    <div className="flex flex-col text-white items-center">
      <div className="flex justify-between items-center w-[46rem]">
        <div className="flex gap-2">
          <p className="text-blue-500 font-bold">Tarefas criadas</p>
          <span className="flex justify-center bg-gray-800 text-white w-7 h-6 rounded-full">1</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </div>
      <div>
        <span>Icone</span>
        <h1>TEXTO</h1>
        <h2>Texto</h2>
      </div>
    </div>
  );
}

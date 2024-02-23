import { useState } from "react";
import "./Global.css";
import { Main } from "./components/Header";
import { Empty } from "./components/List/Empty";
import { HeaderList } from "./components/List/HeaderList";
import { NewTask } from "./components/NewTask";
import { CreatedTask } from "./components/List/Task";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('')
  }

  return (
    <div className="min-w-full min-h-screen	">
      <Main />
      <NewTask
        onSubmit={handleCreateNewTask}
        newValue={newTask}
        setNewValue={setNewTask}
      />
      <HeaderList countTask={tasks.length}/>
      {tasks.length ? tasks.map((item) => {return <CreatedTask text={item}/>}) : <Empty /> }
    </div>
  );
}

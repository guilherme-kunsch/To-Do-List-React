import { useState } from "react";
import "./Global.css";
import { Main } from "./components/Header";
import { Empty } from "./components/List/Empty";
import { HeaderList } from "./components/List/HeaderList";
import { ListTask } from "./components/List/ListTask";
import { CreatedTask } from "./components/List/Task";
import { ToAdd } from "./components/NewTask";

export function App() {

  const [list, setList] = useState([])

  function addTask(newTask) {
    setList(prevState => [...prevState, newTask])
  }

  function removeTask(id) {
    setList(prevState => prevState.filter(item => item.id !== id))
  }

  function handleCheckTask(id) {
    setList(prevState => prevState.map(item => {
      if(item.id === id) return {...item, isChecked: !item.isChecked} 
      return item
    }))

  }

  return (
    <div className="min-w-full min-h-screen	">
      <Main />
      <ToAdd />
      <HeaderList />
      <ListTask />
    </div>
  );
}



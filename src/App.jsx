import { Main } from "./components/Header";
import { NewTask } from "./components/NewTask";
import "./Global.css";


export function App() {

  return (
    <div className="min-w-full min-h-screen	">
      <Main />
      <NewTask />
    </div>
  );
}

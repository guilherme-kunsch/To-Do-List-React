import "./App.css";
import "./Global.css";
import { Main } from "./components/Header";
import { ToAdd } from "./components/Task";

export function App() {
  return (
    <div className="min-w-full min-h-screen	">
      <Main />
      <ToAdd />
    </div>
  );
}



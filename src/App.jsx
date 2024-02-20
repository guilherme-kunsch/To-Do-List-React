import "./App.css";
import "./Global.css";
import { PageContent } from "./components/Content";
import { Main } from "./components/Header";
import { ToAdd } from "./components/NewTask";
import { CreatedTask } from "./components/Task";

export function App() {
  return (
    <div className="min-w-full min-h-screen	">
      <Main />
      <ToAdd />
      <PageContent />
      <CreatedTask />
    </div>
  );
}



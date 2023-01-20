import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <div className="app__main">
        <h1 className="app__title">todos</h1>
        <Input tasks={tasks} setTasks={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import Header from "./components/Header/Header";
import InputTask from "./components/InputTask/InputTask";
import TaskList from "./components/TaskList/TaskList";

import "./sass/main.scss";
import TaskContext from "./components/TasksHandling";
import Options from "./components/Options/Options";

function App() {
  const [tasks, setTasks] = useState([]);
  const values = { tasks, setTasks };
  const [action, setAction] = useState("all");
  const [activeTasks, setActiveTasks] = useState([]);
  const [complitedTasks, setComplitedTasks] = useState([]);

  return (
    <div className="app">
      <Header />
      <TaskContext.Provider value={values}>
        <InputTask />
      </TaskContext.Provider>
      <div className="task-options">
        <TaskContext.Provider value={values}>
          <TaskList
            activeTasks={activeTasks}
            action={action}
            complitedTasks={complitedTasks}
          />
          <Options
            setActiveTasks={setActiveTasks}
            setAction={setAction}
            setComplitedTasks={setComplitedTasks}
          />
        </TaskContext.Provider>
      </div>
    </div>
  );
}
export default App;

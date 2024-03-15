import { useContext, useState } from "react";
import "./inputTask.scss";
import TaskContext from "../TasksHandling";
const InputTask = () => {
  const [taskValue, setTaskValue] = useState("");
  const [id, setId] = useState(0);
  const { tasks, setTasks } = useContext(TaskContext);

  const addTask = () => {
    setId((pre) => pre + 1);
    taskValue.trim() !== "" &&
      taskValue !== null &&
      setTasks([...tasks, { value: taskValue, id: id, complited: false }]);
    setTaskValue("");
  };

  return (
    <div className="input-task">
      <span></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={() => addTask()}>Add</button>
    </div>
  );
};

export default InputTask;

/* eslint-disable react/prop-types */
import "./taskList.scss";
import Task from "../Task/Task";
import { useContext } from "react";
import TaskContext from "../TasksHandling";

const TaskList = ({ activeTasks, action, complitedTasks }) => {
  const { tasks } = useContext(TaskContext);
  if (action === "all") {
    return (
      <div className="task-list">
        {tasks.length ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                value={task.value}
                id={task.id}
                className={`task ${task.complited == true ? "active" : ""}`}
              />
            );
          })
        ) : (
          <h2>Add Your Tasks</h2>
        )}
      </div>
    );
  } else if (action === "active") {
    return (
      <div className="task-list">
        {activeTasks.map((task) => {
          return (
            <Task
              key={task.id}
              value={task.value}
              id={task.id}
              className={`task dont-touch ${
                task.complited == true ? "active" : ""
              }`}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="task-list">
        {complitedTasks.map((task) => {
          return (
            <Task
              key={task.id}
              value={task.value}
              id={task.id}
              className={`task dont-touch ${
                task.complited == true ? "active" : ""
              }`}
            />
          );
        })}
      </div>
    );
  }
};

export default TaskList;

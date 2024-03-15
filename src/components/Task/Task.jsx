/* eslint-disable react/prop-types */
import "./task.scss";
import Cross from "../../assets/images/icon-cross.svg";
import { useRef, useState, useContext } from "react";
import TaskContext from "../TasksHandling";

const Task = ({ value, id, className }) => {
  const [active, setActive] = useState(false);
  const { tasks, setTasks } = useContext(TaskContext);
  const del = useRef(null);
  const isActive = useRef(null);
  return (
    <div
      className={className}
      ref={isActive}
      onClick={(e) => {
        setActive(!active);
        if (e.target !== del.current) {
          !isActive.current.classList.contains("active")
            ? setTasks(
                tasks.map((task) => {
                  return task.id === id ? { ...task, complited: true } : task;
                })
              )
            : setTasks(
                tasks.map((task) => {
                  return task.id === id ? { ...task, complited: false } : task;
                })
              );
        }
      }}>
      <div className="check"></div>
      <div className="text">{value}</div>
      <img
        src={Cross}
        ref={del}
        className="cross"
        onClick={() => {
          setTasks(tasks.filter((task) => task.id !== id));
        }}
      />
    </div>
  );
};

export default Task;

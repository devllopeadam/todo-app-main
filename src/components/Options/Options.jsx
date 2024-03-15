/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import "./options.scss";
import TaskContext from "../TasksHandling";

const Options = ({ setActiveTasks, setComplitedTasks, setAction }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [itemsLeft, setItemsLeft] = useState(null);
  useEffect(() => {
    setItemsLeft(tasks.filter((task) => !task.complited && task).length);
  }, [tasks]);

  const clearComplited = () =>
    setTasks(tasks.filter((task) => task.complited === false));

  return (
    <>
      <div className="options options-big">
        <div className="items-left">{`${itemsLeft} items left`}</div>
        <div className="controlls">
          <p
            onClick={() => {
              setAction("all");
            }}>
            All
          </p>
          <p
            onClick={() => {
              setActiveTasks(tasks.filter((task) => task.complited === false));
              setAction("active");
            }}>
            Active
          </p>
          <p
            onClick={() => {
              setAction("complited");
              setComplitedTasks(
                tasks.filter((task) => task.complited === true)
              );
            }}>
            Completed
          </p>
        </div>
        <div className="clear-complited">
          <p onClick={clearComplited}>Clear Completed</p>
        </div>
      </div>
      <div className="options options-small">
        <div className="left-clear">
          <div className="items-left">{`${itemsLeft} items left`}</div>
          <div className="clear-complited">
            <p>Clear Completed</p>
          </div>
        </div>
        <div className="controlls">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
      </div>
    </>
  );
};

export default Options;

import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const editText = (id, text) => {
    setTasks(
      tasks.map((item) => (item.id === id ? { ...item, text: text } : item))
    );
  };

  return (
    <div>
      {tasks.map((item) => {
        return (
          <Task
            key={item.id}
            task={item}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            editText={editText}
          />
        );
      })}
    </div>
  );
};

export default Tasks;

import React from "react";
import { useState } from "react";

const Task = ({ task, deleteTask, toggleCompleted, editText }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.text);

  const saveItem = () => {
    editText(task.id, value);
    setEditing(false);
  };

  return (
    <div className="task">
      <div className="task__left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompleted(task.id)}
        />
        {!editing ? (
          <p
            onClick={() => setEditing(true)}
            className={task.completed ? "completed" : ""}
          >
            {task.text}
          </p>
        ) : (
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onBlur={saveItem}
          />
        )}
      </div>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;

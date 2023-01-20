import React from "react";
import { useState } from "react";

const Input = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.length !== 0) {
      setTasks([
        ...tasks,
        { id: Math.random(), completed: false, text: input },
      ]);
      setInput("");
    }
  };

  return (
    <div className="input">
      <input
        placeholder="Add Todo..."
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={addTask}>Submit</button>
    </div>
  );
};

export default Input;

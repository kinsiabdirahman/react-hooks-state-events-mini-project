import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDelete }) {
  const filteredTasks =
    selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;

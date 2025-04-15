import React from "react";

const TaskItem = ({ task, onUpdate, onDelete, onEdit, index }) => {
  const toggleStatus = () => {
    onUpdate({
      ...task,
      status: task.status === "Pending" ? "Completed" : "Pending",
    });
  };

  return (
    <li className="flex items-center justify-between space-x-4 border-b py-2">
      <div className="flex-1">
        <div className="font-semibold text-lg">
          #{index + 1} {task.title} {/* Serial number before the task title */}
        </div>
        <div className="text-sm text-gray-600">
          Due: {task.due_date} at {task.due_time}
        </div>
        <div className="text-sm text-gray-600">
          Status:{" "}
          <span
            className={
              task.status === "Completed"
                ? "text-green-600 font-medium"
                : "text-red-600 font-medium"
            }
          >
            {task.status}
          </span>
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
        >
          Delete
        </button>
        <button
          onClick={toggleStatus}
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
        >
          {task.status === "Pending" ? "Complete" : "Undo"}
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

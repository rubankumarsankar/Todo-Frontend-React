import { useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "../api/tasks";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [taskToEdit, setTaskToEdit] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await getTasks();
      setTasks(res);
      setError("");
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to fetch tasks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (task) => {
    try {
      await addTask(task);
      await fetchTasks();
    } catch (err) {
      console.error("Error adding task:", err);
      setError("Failed to add task.");
    }
  };

  const handleUpdate = async (task) => {
    try {
      await updateTask(task);
      setTaskToEdit(null); // Reset taskToEdit after updating
      await fetchTasks();
    } catch (err) {
      console.error("Error updating task:", err);
      setError("Failed to update task.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      await fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
      setError("Failed to delete task.");
    }
  };

  const handleEdit = (task) => {
    setTaskToEdit(task); // Set the task to be edited
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">To-Do App</h2>

      {error && <div className="text-red-500 mb-2">{error}</div>}

      <TaskForm onAdd={handleAdd} onEdit={handleUpdate} taskToEdit={taskToEdit} />

      {loading ? (
        <div className="text-center mt-4 text-gray-500">Loading tasks...</div>
      ) : tasks.length === 0 ? (
        <div className="text-center mt-4 text-gray-500">No tasks found.</div>
      ) : (
        <ul className="space-y-2 mt-4">
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              index={index}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onEdit={handleEdit} // Pass edit handler
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoPage;

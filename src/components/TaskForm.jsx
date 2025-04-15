import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskForm = ({ onAdd, onEdit, taskToEdit }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [dueTime, setDueTime] = useState(null);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDueDate(new Date(taskToEdit.due_date));
      setDueTime(new Date(`${taskToEdit.due_date}T${taskToEdit.due_time}`));
    } else {
      const now = new Date();
      now.setSeconds(0, 0);
      now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15);
      setDueTime(now);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !dueDate || !dueTime) {
      return;
    }

    const formattedDate = dueDate.toISOString().split("T")[0];
    const formattedTime = dueTime.toTimeString().split(" ")[0]; // HH:MM:SS

    const task = {
      title: title.trim(),
      due_date: formattedDate,
      due_time: formattedTime,
      status: "Pending",
    };

    if (taskToEdit) {
      // If editing, include task ID and call onEdit
      onEdit({ ...task, id: taskToEdit.id });
    } else {
      // If adding, call onAdd
      onAdd(task);
    }

    setTitle("");
    setDueDate(null);
    setDueTime(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        autoFocus
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
        className="border p-2 w-full rounded"
      />

      <div className="flex space-x-4">
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          placeholderText="Pick a date"
          className="border p-2 rounded"
          dateFormat="yyyy-MM-dd"
        />

        <DatePicker
          selected={dueTime}
          onChange={(time) => setDueTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="HH:mm"
          placeholderText="Pick a time"
          className="border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        disabled={!title.trim() || !dueDate || !dueTime}
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded disabled:opacity-50"
      >
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;

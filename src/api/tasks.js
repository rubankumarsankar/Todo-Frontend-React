const API_BASE = "http://localhost:8000/api"; // Update with your actual backend URL

export const getTasks = async () => {
  try {
    const res = await fetch(`${API_BASE}/tasks/`);
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return await res.json();
  } catch (err) {
    throw err;
  }
};

export const addTask = async (task) => {
  try {
    const res = await fetch(`${API_BASE}/tasks/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!res.ok) throw new Error("Failed to add task");
    return await res.json();
  } catch (err) {
    throw err;
  }
};

// Accepts a full task object with task.id
export const updateTask = async (task) => {
  try {
    const res = await fetch(`${API_BASE}/tasks/${task.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!res.ok) throw new Error("Failed to update task");
    return await res.json();
  } catch (err) {
    throw err;
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await fetch(`${API_BASE}/tasks/${id}/`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete task");

    // Handle cases where backend returns no content
    if (res.status === 204) {
      return { success: true };
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
};

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "./DailyTasks.css";

function DailyTasks() {
  const { user } = useAuth();
  const storageKey = `task-management-daily-${user?.email || "guest"}`;

  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [task, setTask] = useState("");

  useEffect(() => {
    if (user?.email) {
      localStorage.setItem(storageKey, JSON.stringify(tasks));
    }
  }, [tasks, storageKey, user?.email]);

  const addTask = (e) => {
    e?.preventDefault();
    const text = task.trim();
    if (!text) return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="daily-tasks page">
      <h1>Daily Tasks</h1>
      <p className="subtitle">Add and complete your daily to-dos. Data is saved in your browser.</p>

      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>

      <ul className="task-list">
        {tasks.length === 0 && (
          <li className="empty-state">No tasks yet. Add one above!</li>
        )}
        {tasks.map((t) => (
          <li key={t.id} className={`task-item ${t.done ? "done" : ""}`}>
            <span className="task-text">{t.text}</span>
            <div className="task-actions">
              <button
                type="button"
                className={`btn btn-done ${t.done ? "is-done" : ""}`}
                onClick={() => toggleTask(t.id)}
              >
                {t.done ? "Undo" : "Done"}
              </button>
              <button
                type="button"
                className="btn btn-delete"
                onClick={() => deleteTask(t.id)}
                aria-label="Delete task"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyTasks;

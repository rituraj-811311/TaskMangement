import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "./MonthlyTasks.css";

function MonthlyTasks() {
  const { user } = useAuth();
  const storageKey = `task-management-monthly-${user?.email || "guest"}`;

  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (user?.email) {
      localStorage.setItem(storageKey, JSON.stringify(tasks));
    }
  }, [tasks, storageKey, user?.email]);

  const addTask = (e) => {
    e?.preventDefault();
    const trimmed = title.trim();
    if (!trimmed || !date) return;
    setTasks([...tasks, { id: Date.now(), title: trimmed, date, done: false }]);
    setTitle("");
    setDate("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const sortedTasks = [...tasks].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="monthly-tasks page">
      <h1>Monthly Tasks</h1>
      <p className="subtitle">Plan tasks with due dates. Sorted by date and saved in your browser.</p>

      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="date-input"
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>

      <ul className="task-list">
        {sortedTasks.length === 0 && (
          <li className="empty-state">No monthly tasks yet. Add one above!</li>
        )}
        {sortedTasks.map((t) => (
          <li key={t.id} className={`task-item ${t.done ? "done" : ""}`}>
            <span className="task-content">
              <span className="task-title">{t.title}</span>
              <span className="task-date">Due: {t.date}</span>
            </span>
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

export default MonthlyTasks;

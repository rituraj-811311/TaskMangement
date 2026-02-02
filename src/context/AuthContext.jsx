import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

const AUTH_STORAGE_KEY = "task-management-auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    try {
      const saved = localStorage.getItem(AUTH_STORAGE_KEY);
      if (saved) {
        const userData = JSON.parse(saved);
        setUser(userData);
      }
    } catch (error) {
      console.error("Error loading auth:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (name, email) => {
    const userData = { name, email, loginTime: Date.now() };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  const signup = (name, email) => {
    // Check if user already exists
    try {
      const users = JSON.parse(localStorage.getItem("task-management-users") || "[]");
      const exists = users.find((u) => u.email === email);
      
      if (exists) {
        return { success: false, message: "User already exists. Please login instead." };
      }

      // Add new user
      users.push({ name, email });
      localStorage.setItem("task-management-users", JSON.stringify(users));

      // Auto login after signup
      login(name, email);
      return { success: true };
    } catch (error) {
      return { success: false, message: "Error creating account. Please try again." };
    }
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

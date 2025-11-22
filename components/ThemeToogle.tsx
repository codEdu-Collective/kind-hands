"use client";

import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const selectedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const newTheme = selectedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      accessKey="t"
      title="(Alt + T)"
      className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-2xl border-2 border-dark dark:border-white transition-colors"
    >
      {theme === "light" ? (
        <MdDarkMode size={24} className="text-blue-500" />
      ) : (
        <MdLightMode size={24} className="text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;

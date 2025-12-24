"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ждем загрузки на стороне клиента, чтобы избежать ошибок гидратации
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
    >
      {theme === "dark" ? (
        <FaSun className="h-6 w-6 text-yellow-500" /> // Желтое солнце
      ) : (
        <FaMoon className="h-6 w-6 text-blue-500" />  // Синяя луна
      )}
    </button>
  );
}
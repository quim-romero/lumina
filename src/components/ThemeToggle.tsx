import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

type Theme = "light" | "dark";

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", t === "dark");
  root.style.setProperty("color-scheme", t);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? null;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    if (stored) {
      setTheme(stored);
      applyTheme(stored);
    } else {
      const sys: Theme = mql.matches ? "dark" : "light";
      setTheme(sys);
      applyTheme(sys);
      const onChange = (e: MediaQueryListEvent) => {
        const next: Theme = e.matches ? "dark" : "light";
        setTheme(next);
        applyTheme(next);
      };
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
  }, []);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") {
        const next =
          (e.newValue as Theme | null) ??
          (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");
        setTheme(next);
        applyTheme(next);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="p-2 rounded-md transition hover:scale-105 hover:bg-light/30 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
    >
      <span aria-hidden>
        {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
      </span>
    </button>
  );
}

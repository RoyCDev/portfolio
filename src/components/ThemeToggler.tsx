import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react"

function ThemeToggler() {
  const [theme, setTheme] = useState("");
  const toggleTheme = (): void => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", storedTheme);
    setTheme(storedTheme)
  }, [])

  return (
    <button
      onClick={toggleTheme}
      className="relative cursor-pointer text-3xl size-7.5"
    >
      <MdLightMode className="dark:opacity-0 -rotate-35 dark:rotate-0 absolute top-0  transition-transform duration-300" />
      <MdDarkMode className="opacity-0 dark:opacity-100 rotate-0 dark:rotate-35 absolute top-0 transition-transform duration-300" />
    </button>
  )
}

export default ThemeToggler
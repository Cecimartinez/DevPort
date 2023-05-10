import { useEffect, useState } from "react";

const darkMode = "dark";
const lightMode = "light";

export const useTheme = (initialMode) => {
  const [mode, setMode] = useState(initialMode || lightMode);

  const toggleMode = () => {
    const newMode = mode === lightMode ? darkMode : lightMode;
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setMode(savedMode);
    }
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return [mode, toggleMode];
};

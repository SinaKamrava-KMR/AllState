import { useEffect, useState, Dispatch, SetStateAction } from "react";

const useTheme = (): [string, Dispatch<SetStateAction<string>>] => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ?? "light"
  );
  const prevTheme: string = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;
    root.classList.remove(prevTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [prevTheme, theme]);

  return [prevTheme, setTheme];
};

export default useTheme;

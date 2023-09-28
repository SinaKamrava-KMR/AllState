import useTheme from "../../hooks/mode/useTheme";
import { useState, ChangeEvent } from "react";
const SwitchMode = () => {
  const [theme, setTheme] = useTheme();
  const [isCheck, setIsCheck] = useState<boolean>(theme === "dark");

  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>): void => {
    const state: boolean = e.target.checked;
    setIsCheck(state);
    setTheme(state ? "light" : "dark");
  };

  return (
    <label className={`flex cursor-pointer`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={isCheck}
          onChange={handleChangeCheck}
          className="sr-only"
        />
        <div
          className={`block h-7 w-12 rounded-full ${
            isCheck ? "bg-slate-300" : "bg-slate-700"
          }`}
        ></div>
        <div
          className={`h-5 w-5 rounded-full top-1 left-1 transition dark:bg-slate-100 bg-slate-500 absolute ${
            isCheck ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default SwitchMode;

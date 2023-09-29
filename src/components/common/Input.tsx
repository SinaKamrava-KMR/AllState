import { forwardRef, Ref } from "react";

const Input = forwardRef(
  (
    {
      type = "text",
      tabindex,
      icon,
      placeholder,
      className = "",
      error,
      ...res
    }: Partial<InputType>,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div
        className={`border p-2 min-w-[200px] border-slate-300 dark:border-slate-600 rounded w-full flex items-center gap-2 focus-within:border-blue-500 dark:focus-within:border-blue-400 relative ${className}`}
      >
        <div className="text-slate-400 text-xl">{icon}</div>
        <input
          type={type}
          tabIndex={tabindex}
          placeholder={placeholder}
          {...res}
          ref={ref}
          className="bg-transparent outline-0 w-full"
        />
        {error !== "" && (
          <small className="absolute left-1 translate-y-8 dark:text-red-400 text-red-600 transition-all duration-200 ">
            {error}
          </small>
        )}
      </div>
    );
  }
);

export default Input;

type ButtonProps = {
  children: React.ReactNode,
  className: string,
  onClick:()=>void
}



const Button = ({children,className="",onClick}:Partial<ButtonProps>) => {
  return (
    <button onClick={onClick} className={`bg-blue-500 rounded px-5 py-2 cursor-pointer text-white   hover:bg-blue-700 transition-all duration-300 ${className}`}>{ children}</button>
  )
}

export default Button
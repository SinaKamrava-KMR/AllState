import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import SwitchMode from "../switchMode";
import useDataContext from "../../hooks/context/useDataContext";
import { HiOutlineLogin, HiOutlineUserCircle } from "react-icons/hi";
const Header = () => {
  const { user } = useDataContext();
  
  return (
    <header className="flex w-full h-14 shadow-md dark:bg-slate-800 transition-all duration-300 px-3 md:px-10 mx-auto justify-between items-center gap-3">
      <Logo />
      <span className="flex-1"></span>
      <SwitchMode />
      {user.name === "" ? (
        <Link
          to="/login"
          className="text-2xl md:text-3xl text-slate-700 dark:text-blue-400"
        >
          <HiOutlineLogin />
        </Link>
      ) : (
        <div className="flex gap-2 items-center">
          <p className="text-lg font-semibold">{`${user.name} ${user.lastName}`}</p>
          <span className="text-2xl">
            <HiOutlineUserCircle />
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;

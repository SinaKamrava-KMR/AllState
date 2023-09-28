import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="w-screen h-screen bg-slate-50 text-slate-900 dark:text-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;

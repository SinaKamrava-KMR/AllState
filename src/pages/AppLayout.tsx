
import Header from "../components/header";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="w-screen h-screen bg-slate-50 text-slate-900 dark:text-white dark:bg-gray-900 transition-colors duration-300 flex flex-col overflow-x-hidden">
      <Header />
      <main className="w-full flex-1 flex flex-col mt-14">
      <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

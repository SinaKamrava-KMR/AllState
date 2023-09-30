import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7">
          <img
            src={`/public/logo/logo.png`}
            className="object-cover w-full h-full hidden dark:block"
          />
          <img
            src={`/public/logo/logo_d.png`}
            className="object-cover w-full h-full dark:hidden"
          />
        </div>
        <p className="font-bold">AllState</p>
      </div>
    </Link>
  );
};

export default Logo;

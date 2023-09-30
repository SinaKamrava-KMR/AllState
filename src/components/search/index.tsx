import { HiSearch } from "react-icons/hi";
type SearchPropsType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
const Search = ({ value, setValue }: SearchPropsType) => {
  return (
    <div className="flex items-center gap-2 w-full md:w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto transition-all text-lg   p-2">
      <span className="text-xl text-slate-500 dark:text-slate-100">
        <HiSearch />
      </span>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none w-full h-full "
      />
    </div>
  );
};

export default Search;

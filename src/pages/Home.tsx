import { useState } from "react";
import Search from "../components/search";
import CardWrapper from "../components/common/CardWrapper";
import Pagination from "../components/common/Pagination";

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const handleChangePage = (page:number)=>{
    console.log(page);
    
  }
  return (
    <div className="py-5 px-2 flex-1 flex flex-col gap-5">
      <Search value={query} setValue={setQuery} />
      <CardWrapper query={query} />
      <Pagination currentPage={1} pages={3} onChange={handleChangePage} />
    </div>
  );
};

export default Home;

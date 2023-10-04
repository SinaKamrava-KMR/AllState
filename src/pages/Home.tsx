import { useEffect, useState } from "react";
import Search from "../components/search";
import CardWrapper from "../components/common/CardWrapper";
import Pagination from "../components/common/Pagination";
import usePost from "../hooks/post/usePost";
import Card from "../components/common/CardItem";
import { useSearchParams } from "react-router-dom";
import { withDebounce } from "../utils/helper";

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const { setParams, data } = usePost();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (query.length > 0) {
      withDebounce(() => {
        setParams({ address_like: query, _limit: 12 });
      }, 1000)();
    } else {
      setParams({ address_like: query, _limit: 12 });
    }



    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    setParams((p) => ({ ...p, _page: searchParams.get("page") || 1 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("page")]);

  return (
    <section className="py-5 px-2 flex-1 flex flex-col gap-5">
      <Search value={query} setValue={setQuery} />
      <CardWrapper>
        {data?.posts.map((post, idx) => {
          return <Card key={idx} post={post} />;
        })}
      </CardWrapper>
      <Pagination
        currentPage={Number(searchParams.get("page")) || 1}
        pages={Number(data?.totalPage)}
      />
    </section>
  );
};

export default Home;

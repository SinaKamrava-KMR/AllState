import { useEffect, useState } from "react";
import Search from "../components/search";
import CardWrapper from "../components/common/CardWrapper";
import Pagination from "../components/common/Pagination";
import usePost from "../hooks/post/usePost";
import Card from "../components/common/CardItem";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const { setParams, data } = usePost();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setParams({
      address_like: query,
      _page: searchParams.get("page") || 1,
      _limit: 12,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, searchParams.get("page")]);

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

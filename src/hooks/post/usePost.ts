import { useEffect, useState } from "react";
import { getPosts } from "../../services/api/post";
import toast from "react-hot-toast";

export default function usePost() {
  const [params, setParams] = useState<Partial<QueryParamsType>>({
    _limit: 12,
  });
  const [posts, setPosts] = useState<PostResponseType>();
 
  useEffect(() => {
    const handleRequest = async (params: Partial<QueryParamsType>) => {
      try {
        const res = await getPosts(params);
        const totalCount = res.headers['x-total-count'];
        setPosts({posts:res.data,totalPage:Math.ceil((totalCount/12))});
      } catch (e) {
        toast.error("something went wrong !!! can not get posts");
      }
    };
    handleRequest(params);

   
  }, [params]);

  // handleRequest(params);

  return { setParams, data:posts };
}

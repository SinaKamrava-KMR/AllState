import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getpostById } from "../../services/api/post";

export default function usePostById(id:number|string) {

  const [post, setpost] = useState<PostType>();
  const [reset, setReset] = useState<boolean>(false);

  useEffect(() => {
    const handleRequest = async () => {
      try {
        const res = await getpostById(id);
        setpost(res);
      } catch (e) {
        toast.error("something went wrong !!! can not get post");
      }
    };
    handleRequest();
  }, [id,reset]);


  return { post ,setReset};
}

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updatePost } from "../../services/api/post";

export default function useUpdatePost(
  onSuccess: (res: PostType) => void
) {
  const [params, setParams] = useState<PostType | undefined>();

  useEffect(() => {
    const handleRequest = async () => {
      try {
        const res = await updatePost(params as PostType);
        
        
        onSuccess(res);
      } catch (e) {
        toast.error("something went wrong !!! can not update post");
      }
    };
    if (params) handleRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return { setParams };
}
